# Thermomixbella

Static HTML/CSS/JS site for thermomixbella.com, promoting Thermomix TM7 demos.

## Which branch deploys

> **Netlify builds `Test1`, not `main`.** Pushing to `main` does NOT update the live
> site. Both branches currently point at the same commit; keep them in step until the
> production branch is switched.

To switch it, in the Netlify UI: **Project configuration → Build & deploy → Continuous
deployment → Branches and deploy contexts → Edit settings → Production branch → `main`**.
The REST API accepts `build_settings.repo_branch` and silently ignores it, so this cannot
be scripted. Once it is switched, delete `Test1` and update this section.

## Deploying

Netlify project `magical-jalebi-6fcd4c`, publish directory `.`, no build command.
A push to the production branch is live within seconds, and there is no staging.
Verify first with a draft deploy, which leaves production untouched:

    netlify deploy --dir .        # prints a private draft URL
    netlify deploy --prod         # do NOT use: puts live ahead of git

Promote by pushing the branch, so the repo and the live site never diverge.

`main` and `redesign` are in the allowed-branches list, so a `redesign` branch gets its
own preview URL. Add any other branch to that list before expecting it to build.

## Gotchas

- Netlify serves clean URLs, so `foo.html` is also live at `/foo`. Deleting a page orphans
  **both** URLs; redirect both forms in `_redirects`.
- A redirect rule loses to a matching static file unless forced with `!`. An earlier rule
  set returned 200 instead of 301 for months because of this.
- Every form posts to Formspree `https://formspree.io/f/xanpwand`. Single point of failure
  for all enquiries.
- Domain is registered at NameCheap. The similarly named `thermobella.com` is not
  registered and is not this site.

Old branches are kept as tags: `archive/clean-urls`, `archive/next-upgrade`,
`archive/main-2025-fossil`.
