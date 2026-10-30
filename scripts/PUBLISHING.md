# Publishing a blog post

Post dates come only from the MDX frontmatter (`date`, `dateModified`). Nothing is
computed at build time, so a date written when the PR was drafted goes live unchanged.
Queued PRs may carry any placeholder date; the publish step must set the real one:

1. `gh pr checkout <N>`
2. `node scripts/set-post-date.mjs <slug>` (defaults to today, Europe/Istanbul)
3. `git commit -am "Set publish date" && git push`
4. Wait for the Vercel check, then `gh pr merge <N> --squash`
