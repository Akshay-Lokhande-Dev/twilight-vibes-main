# Safe HTML Patch System

This repository contains a small patch utility for making targeted changes to large HTML files without replacing the entire file.

## Patch format

Create a JSON file under `patches/`:

```json
{
  "file": "blog/where-to-watch-twilight.html",
  "description": "Update meta description",
  "replacements": [
    {
      "old": "exact existing text",
      "new": "replacement text"
    }
  ]
}
```

Each `old` value must occur exactly once. If any replacement is missing or ambiguous, the script aborts and does not modify the target.

## Run locally

```bash
python3 scripts/apply-patch.py patches/example.patch.json
```

The script validates every replacement first, verifies the resulting text, and uses an atomic file replacement so a partial write is avoided.

## Safety

- Missing `old` text: abort.
- Duplicate `old` text: abort.
- Any failed replacement: no file write.
- Result is verified before completion.
- No website content is changed unless a patch is explicitly applied.
