function gpr
  set -l current_branch (vcprompt -f '%b')
  set -l remote (git remote get-url origin)
  node ~/src/dotfiles/scripts/openGitPullRequest.js $remote $current_branch
end