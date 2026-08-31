# Thermomixbella

Static HTML/CSS/JS site for thermomixbella.com, promoting Thermomix TM7 demos.

## Which branch deploys

Netlify builds `main`. A push to `main` is live within seconds, and there is no staging.

## Deploying

Netlify project `magical-jalebi-6fcd4c`, publish directory `.`, no build command.
A push to the production branch is live within seconds, and there is no staging.
Verify first with a draft deploy, which leaves production untouched:

    netlify deploy --dir .        # prints a private draft URL
    netlify deploy --prod         # do NOT use: puts live ahead of git

Promote by pushing the branch, so the repo and the live site never diverge.

`redesign` is in the allowed-branches list, so a `redesign` branch gets its own preview
URL. Add any other branch to that list before expecting it to build.

To change the production branch via the API, PATCH a **top-level `repo` object** carrying
the full descriptor. Sending `build_settings.repo_branch`, or a partial `repo` object, is
accepted and silently ignored:

    curl -X PATCH "https://api.netlify.com/api/v1/sites/$SITE_ID" \
      -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
      -d '{"repo":{"provider":"github","repo_type":"git",
           "repo_path":"Matteo-Manzoni/Thermobellawebsite",
           "repo_url":"https://github.com/Matteo-Manzoni/Thermobellawebsite",
           "repo_branch":"main","dir":".","installation_id":66862190}}'

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
