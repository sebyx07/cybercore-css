# shellcheck shell=bash
# Shared helpers for bin/setup, bin/check, bin/dev, bin/stop and bin/api-diff. Sourced, never run.
# shellcheck disable=SC2034  # variables here are read by the scripts that source this file
#
# Exit codes used by every script:
#   0   success
#   75  an environment prerequisite is missing (Node, node_modules, a browser) —
#       the script refused to run; fix the box (usually `bin/setup`), not the code
#   *   the script ran and something failed

EX_ENV=75

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# State bin/stop needs to undo exactly what bin/dev --detach started.
DX_STATE_DIR="$ROOT/tmp/dx"
DEV_PID_FILE="$DX_STATE_DIR/dev.pid"
DEV_LOG_FILE="$DX_STATE_DIR/dev.log"

step() { printf '\n▸ %s\n' "$*"; }
ok() { printf '  ✔ %s\n' "$*"; }

# env_missing <what is missing> <how to fix it> — exits 75.
env_missing() {
  {
    printf '\nENVIRONMENT MISSING (exit %s): %s\n' "$EX_ENV" "$1"
    printf '  fix: %s\n' "$2"
  } >&2
  exit "$EX_ENV"
}

# The Node version .nvmrc names, without a leading "v": "22", "22.11" or "22.11.0".
wanted_node() {
  [ -f "$ROOT/.nvmrc" ] ||
    env_missing ".nvmrc is missing" "restore .nvmrc: it names the Node version for local runs and CI"
  local want
  want="$(tr -d '[:space:]' <"$ROOT/.nvmrc")"
  want="${want#v}"
  printf '%s' "$want" | grep -qE '^[0-9]+(\.[0-9]+){0,2}$' || {
    echo ".nvmrc must hold a numeric Node version (22, 22.11 or 22.11.0); it holds '$want'." >&2
    exit 1
  }
  printf '%s' "$want"
}

# Puts the Node named in .nvmrc first on PATH (mise, then nvm, then whatever is on PATH).
# `use_node install` also installs it; `use_node require` exits 75 when no usable Node exists.
# Without mise or nvm, a Node on PATH at least as new as .nvmrc's major is accepted: CI is the
# judge of the exact version, and a contributor should not need a version manager to send a fix.
use_node() {
  local action="$1" want have dir
  want="$(wanted_node)" || exit $?

  if command -v mise >/dev/null 2>&1; then
    if [ "$action" = install ] && ! mise where "node@$want" >/dev/null 2>&1; then
      mise install "node@$want" ||
        env_missing "mise could not install node $want" "mise install node@$want"
    fi
    # The real bin dir, not the shim: a shim resolves the version from the caller's directory.
    if dir="$(mise where "node@$want" 2>/dev/null)"; then PATH="$dir/bin:$PATH"; fi
  elif [ -s "${NVM_DIR:-$HOME/.nvm}/nvm.sh" ]; then
    # shellcheck disable=SC1091  # nvm lives outside the repo
    source "${NVM_DIR:-$HOME/.nvm}/nvm.sh"
    if [ "$action" = install ]; then
      nvm install "$want" >/dev/null ||
        env_missing "nvm could not install node $want" "nvm install $want"
    fi
    nvm use "$want" >/dev/null 2>&1 || true
  fi
  export PATH

  have="$(node -p 'process.versions.node' 2>/dev/null || true)"
  [ -n "$have" ] ||
    env_missing "node is not installed (.nvmrc wants $want)" "install Node $want or newer (https://nodejs.org, mise or nvm), then run bin/setup"
  [ "${have%%.*}" -ge "${want%%.*}" ] ||
    env_missing "node $have is active but .nvmrc wants $want or newer" "install Node $want (mise install node@$want, or nvm install $want), then run bin/setup"
}

# Exit 75 unless node_modules exists and is at least as new as package-lock.json.
require_deps() {
  [ -f "$ROOT/node_modules/.package-lock.json" ] ||
    env_missing "node_modules is not installed" "bin/setup"
  [ ! "$ROOT/package-lock.json" -nt "$ROOT/node_modules/.package-lock.json" ] ||
    env_missing "package-lock.json changed after node_modules was installed" "bin/setup"
}

# has_script <name> — true when package.json defines that npm script.
has_script() {
  node -e '
    const p = require(process.argv[1]);
    process.exit(p.scripts && p.scripts[process.argv[2]] ? 0 : 1);
  ' "$ROOT/package.json" "$1"
}
