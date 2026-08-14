#!/usr/bin/env python3
"""Safely apply exact text replacements to a large text/HTML file."""
import json
import os
import sys
import tempfile


def fail(message):
    print(f"ERROR: {message}")
    raise SystemExit(1)


def load_patch(path):
    if not os.path.isfile(path):
        fail(f"Patch file not found: {path}")
    try:
        with open(path, "r", encoding="utf-8") as f:
            patch = json.load(f)
    except json.JSONDecodeError as exc:
        fail(f"Invalid JSON in patch file: {exc}")
    if not isinstance(patch, dict) or "file" not in patch or "replacements" not in patch:
        fail("Patch must contain 'file' and 'replacements'.")
    if not isinstance(patch["replacements"], list) or not patch["replacements"]:
        fail("'replacements' must be a non-empty list.")
    for i, rep in enumerate(patch["replacements"], 1):
        if not isinstance(rep, dict) or "old" not in rep or "new" not in rep:
            fail(f"Replacement #{i} must contain 'old' and 'new'.")
    return patch


def main():
    if len(sys.argv) != 2:
        fail("Usage: python3 scripts/apply-patch.py patches/<name>.patch.json")

    patch_path = sys.argv[1]
    patch = load_patch(patch_path)
    target = patch["file"]

    if not os.path.isfile(target):
        fail(f"Target file not found: {target}")

    with open(target, "r", encoding="utf-8") as f:
        original = f.read()

    result = original
    for i, rep in enumerate(patch["replacements"], 1):
        old = rep["old"]
        new = rep["new"]
        count = result.count(old)
        if count != 1:
            fail(f"Replacement #{i}: expected old text exactly once, found {count}.")
        result = result.replace(old, new, 1)

    for i, rep in enumerate(patch["replacements"], 1):
        if rep["new"] not in result:
            fail(f"Replacement #{i}: new text was not found after applying patch.")

    if result == original:
        print("No changes required.")
        return

    directory = os.path.dirname(os.path.abspath(target)) or "."
    fd, temp_path = tempfile.mkstemp(prefix=".patch-", dir=directory, text=True)
    try:
        with os.fdopen(fd, "w", encoding="utf-8", newline="") as f:
            f.write(result)
            f.flush()
            os.fsync(f.fileno())
        os.replace(temp_path, target)
    except Exception:
        try:
            os.unlink(temp_path)
        except OSError:
            pass
        raise

    print(f"Patch applied successfully: {target}")


if __name__ == "__main__":
    main()
