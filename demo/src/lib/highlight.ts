/**
 * A small tokenizer for the four languages the docs print. It only has to
 * colour snippets we wrote ourselves, which keeps a full grammar library out
 * of the bundle.
 */

export type TokenKind = 'plain' | 'comment' | 'keyword' | 'name' | 'string' | 'number' | 'dim';

export interface Token {
  kind: TokenKind;
  text: string;
}

type Rule = [TokenKind, RegExp];

const JS_KEYWORDS =
  /\b(?:import|from|export|default|const|let|var|function|return|if|else|for|of|in|new|await|async|typeof|true|false|null|undefined)\b/y;

const SCRIPT: Rule[] = [
  ['comment', /\/\/[^\n]*|\/\*[\s\S]*?\*\//y],
  ['string', /'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`/y],
  ['keyword', JS_KEYWORDS],
  ['number', /\b\d+(?:\.\d+)?\b/y],
  ['name', /[A-Za-z_$][\w$]*(?=\s*\()/y],
  ['dim', /[{}()[\];,.:=<>+\-*/!?&|]+/y],
];

const STYLE: Rule[] = [
  ['comment', /\/\/[^\n]*|\/\*[\s\S]*?\*\//y],
  ['string', /'[^'\n]*'|"[^"\n]*"/y],
  ['keyword', /@[\w-]+/y],
  ['number', /#[\da-fA-F]{3,8}\b|-?\d+(?:\.\d+)?(?:%|[a-z]+)?/y],
  ['name', /--[\w-]+|[a-z-]+(?=\s*:)/y],
  ['dim', /[{}();,:]+/y],
];

// Markup is tokenized in two modes: text between tags, and the inside of a tag.
const MARKUP_TEXT: Rule[] = [
  ['comment', /<!--[\s\S]*?-->/y],
  ['dim', /<!doctype[^>]*>/iy],
];

const MARKUP_TAG: Rule[] = [
  ['string', /"[^"]*"|'[^']*'/y],
  ['name', /[\w:-]+(?==)|[\w:-]+(?=[\s/>])/y],
  ['dim', /[=/]+/y],
];

function scan(source: string, rules: Rule[]): Token[] {
  const tokens: Token[] = [];
  let index = 0;
  let plain = '';

  const flush = () => {
    if (plain) {
      tokens.push({ kind: 'plain', text: plain });
      plain = '';
    }
  };

  while (index < source.length) {
    let matched = false;
    for (const [kind, pattern] of rules) {
      pattern.lastIndex = index;
      const match = pattern.exec(source);
      if (match && match[0].length > 0) {
        flush();
        tokens.push({ kind, text: match[0] });
        index += match[0].length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      plain += source.charAt(index);
      index += 1;
    }
  }
  flush();
  return tokens;
}

function scanMarkup(source: string): Token[] {
  const tokens: Token[] = [];
  const tag = /<\/?[A-Za-z][\w-]*|<!--[\s\S]*?-->|<!doctype[^>]*>/gi;
  let index = 0;

  for (let open = tag.exec(source); open; open = tag.exec(source)) {
    if (open.index > index) {
      tokens.push({ kind: 'plain', text: source.slice(index, open.index) });
    }
    if (!/^<\/?[A-Za-z]/.test(open[0])) {
      tokens.push(...scan(open[0], MARKUP_TEXT));
      index = tag.lastIndex;
      continue;
    }
    const close = source.indexOf('>', tag.lastIndex);
    const end = close === -1 ? source.length : close;
    const bracket = open[0].startsWith('</') ? '</' : '<';
    tokens.push({ kind: 'dim', text: bracket });
    tokens.push({ kind: 'keyword', text: open[0].slice(bracket.length) });
    tokens.push(...scan(source.slice(tag.lastIndex, end), MARKUP_TAG));
    if (close !== -1) {
      tokens.push({ kind: 'dim', text: '>' });
    }
    index = close === -1 ? source.length : close + 1;
    tag.lastIndex = index;
  }
  if (index < source.length) {
    tokens.push({ kind: 'plain', text: source.slice(index) });
  }
  return tokens;
}

export type Grammar = 'markup' | 'style' | 'script' | 'none';

export function highlight(source: string, grammar: Grammar): Token[] {
  switch (grammar) {
    case 'markup':
      return scanMarkup(source);
    case 'style':
      return scan(source, STYLE);
    case 'script':
      return scan(source, SCRIPT);
    default:
      return [{ kind: 'plain', text: source }];
  }
}
