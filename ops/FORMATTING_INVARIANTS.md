###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/ops/FORMATTING_INVARIANTS.md\>
# FORMATTING_INVARIANTS.md
### Purpose
Defines the formatting invariants required for all identity‑bearing and doctrinal files in the repository.
Ensures that formatting cannot drift, mutate, or degrade under human editing, AI editing, or toolchain transformations.

---------------------------------------------------------------------

## 0. Rationale

Formatting is part of identity.

If formatting drifts:

- identity drifts
- invariants break
- UB becomes possible
- header/footer matching becomes unreliable
- rollback becomes ambiguous
- diff‑based review becomes unsafe
- doctrine becomes unstable

Paste Wrong File Blocker exists because formatting drift is real, common, and destructive.

Formatting invariants eliminate this class of failure.

---------------------------------------------------------------------

## 1. Identity‑Critical Formatting

The following formatting elements are **identity‑critical** and must never change:

1. **Header wrapper**
   ```
   ###### Start of Document \</absolute/path/to/file\>
   ```

2. **Footer wrapper**
   ```
   ###### End of Document \</absolute/path/to/file\>
   ```

3. **Escaped angle brackets**
   - `\</path\>` is required
   - `<path>` is invalid
   - `</path>` is invalid
   - `</path\>` is invalid
   - `\</path>` is invalid

4. **Absolute path invariants**
   - paths must use **Unix‑style delimiters** (`/`)
   - no backslashes (`\`)
   - no mixed delimiters
   - no relative paths
   - no environment variables
   - no symlinks

5. **Windows path normalization**
   - Windows absolute paths **must not** begin with `C:/dev/...`
   - Windows absolute paths **must** begin with:
     ```
     /C/dev/...
     ```
   - This ensures cross‑platform neutrality and prevents Markdown, JSON, YAML, and regex breakage.

6. **Hash count**
   - exactly six (`######`)
   - no more
   - no fewer

Any deviation from these rules is a **CRITICAL: Loss of Determinism (LOD)** violation.

---------------------------------------------------------------------

## 2. Whitespace Invariants

Whitespace rules are strict:

- no trailing spaces
- no leading spaces on wrapper lines
- no tabs
- no mixed indentation
- blank lines allowed only where structurally required
- no blank lines at the top of the file
- exactly one newline at the end of the file

Whitespace drift is a formatting mutation and must be treated as a violation.

---------------------------------------------------------------------

## 3. Markdown Structure Invariants

Markdown structure must be:

- stable
- predictable
- diff‑friendly
- free of ambiguity

Rules:

- headings use `#` only
- no ATX‑closed headings
- no HTML headings
- horizontal rules use `-----` only
- code fences use triple backticks
- no indentation‑based code blocks
- lists use `-` only
- no nested lists deeper than one level
- no inline HTML

These rules ensure that formatting cannot be misinterpreted by editors, renderers, or AI tools.

---------------------------------------------------------------------

## 4. Copy‑Block Invariants

Copy blocks must:

- use triple backticks
- specify language only when required
- never contain unescaped Ugly Betty wrappers
- never contain raw `<` or `>` when representing identity wrappers
- never contain trailing whitespace
- never contain tabs

Copy blocks are a common source of formatting drift.
These invariants prevent mutation.

---------------------------------------------------------------------

## 5. Invariant Enforcement

Any artifact that violates formatting invariants:

- is invalid
- must be corrected immediately
- must not influence the repository
- must not be merged
- must not be used as a reference

Formatting invariants override:

- personal style
- editor defaults
- markdown renderers
- AI output
- convenience

Formatting is not aesthetic.
Formatting is identity.

---------------------------------------------------------------------

## 6. Interaction With Other Doctrines

Formatting invariants support:

- HEADER_FOOTER_VALIDATION.md
- UOW_DOCTRINE.md
- UNDEFINED_BEHAVIOR.md
- SAFE_POINT_ATOMICITY.md
- CONTEXT_RECONSTRUCTION_INVARIANT.md
- FRY_THE_PATIENT_MAPPING.md

Formatting drift is a precursor to UB.
Formatting invariants prevent drift.

---------------------------------------------------------------------

## 7. Operator Postconditions

After reading this document, the operator must be able to state:

1. Formatting is identity.
2. Formatting invariants must never drift.
3. Ugly Betty wrappers must be exact.
4. Escaped angle brackets are mandatory.
5. Unix‑style path delimiters are mandatory.
6. Windows paths must use `/C/dev/...` form.
7. Whitespace rules are strict.
8. Markdown structure is fixed.
9. Violations produce LOD.

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/ops/FORMATTING_INVARIANTS.md\>
