#!/usr/bin/env bash
# Visual regression in the pinned Playwright image, the same one CI's visual job uses, so the
# baselines in tests/visual/__snapshots__/ match on every machine. Build the demo first.
#
#   npm run build && scripts/visual.sh                      compare against the baselines
#   npm run build && scripts/visual.sh --update-snapshots   accept the new rendering
#
# Uses the host's node_modules (no install in the container). Keep IMAGE in step with
# @playwright/test in package.json and with .github/workflows/ci.yml.
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

IMAGE='mcr.microsoft.com/playwright:v1.65.1-noble@sha256:1507cbfc550a63a6b7396791ca4f00df17beb56342d2447b3f106c306f525579'

[ -f demo/dist/index.html ] || { echo "demo/dist is missing: run npm run build first" >&2; exit 1; }
command -v docker >/dev/null || { echo "docker is required for visual tests" >&2; exit 75; }

exec docker run --rm --ipc=host --init \
  --user "$(id -u):$(id -g)" -e HOME=/tmp -e CI=1 \
  -v "$PWD:/work" -w /work \
  "$IMAGE" npx --no-install playwright test "$@"
