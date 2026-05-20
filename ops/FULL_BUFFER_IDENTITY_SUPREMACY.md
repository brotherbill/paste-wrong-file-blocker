###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/ops/FULL_BUFFER_IDENTITY_SUPREMACY.md\>
# FULL_BUFFER_IDENTITY_SUPREMACY.md
### Purpose
Defines the doctrine under which a complete, identity‑bearing buffer overrides the destination file entirely.
Establishes the supremacy of buffer identity when editor identity and buffer identity match.
Ensures deterministic, safe, and unambiguous full‑document replacement behavior.

---------------------------------------------------------------------

## 0. Rationale

When a buffer contains a complete, valid, identity‑bearing document:

- it is self‑contained
- it is internally consistent
- it carries its own identity
- it is authoritative

In such cases, the destination file’s contents are irrelevant.

This doctrine prevents:

- false positives from near‑miss Marked Lines
- unsafe reliance on corrupted file identity
- ambiguous paste behavior
- UB caused by partial or inconsistent identity structures

Full‑document identity must override all other considerations.

---------------------------------------------------------------------

## 1. Identity Match Requirement

Full‑buffer identity supremacy applies **only** when:

1. **Editor path matches buffer path**
   - absolute path equality
   - Unix‑style delimiters (`/`)
   - Windows paths normalized to `/C/dev/...` form

2. **Editor filename matches buffer filename**
   - exact match
   - case‑sensitive
   - no inferred or altered extensions

If editor identity and buffer identity do not match, this doctrine does not apply.

---------------------------------------------------------------------

## 2. Buffer Identity Requirements

The buffer must contain:

1. A **valid Start Marked Line**
2. A **valid End Marked Line**
3. Both lines must be:
   - exact
   - byte‑for‑byte canonical
   - escaped angle bracket form
   - correct absolute path
   - correct filename
   - correct hash count (`######`)

4. The buffer must be a **complete document**, not a fragment.

5. The buffer must contain **no near‑miss Marked Lines** internally.

6. The buffer must contain **no duplicate wrappers**.

7. The buffer must have **correct wrapper order**:
   - Start wrapper first
   - End wrapper last

If any of these conditions fail, the buffer is not identity‑bearing.

---------------------------------------------------------------------

## 3. Supremacy Rule

**LAW: When editor identity matches buffer identity and the buffer contains both valid Marked Lines, the buffer becomes authoritative and the destination file’s contents are ignored.**

This is the Full‑Buffer Identity Supremacy Rule.

### Consequences

If the rule applies:

- the buffer defines the new identity
- the buffer defines the new structure
- the buffer defines the new invariants
- the destination file’s contents are irrelevant
- the paste is treated as a **full‑document replacement**
- existing near‑miss Marked Lines do **not** cause rejection
- invalid‑file rules do **not** apply
- the system applies **full‑document paste rules**

This rule ensures deterministic behavior even when the existing file is malformed.

---------------------------------------------------------------------

## 4. Non‑Qualifying Cases

The supremacy rule does **not** apply to:

- partial pastes
- region pastes
- fragments
- buffers missing either Marked Line
- buffers with near‑miss Marked Lines
- buffers with mutated wrappers
- buffers with whitespace‑damaged wrappers
- buffers with only one wrapper
- buffers with wrapper order reversed
- buffers whose identity does not match the editor’s identity

Only a **complete, valid, identity‑bearing buffer** qualifies.

---------------------------------------------------------------------

## 5. Interaction With Other Doctrines

Full‑buffer identity supremacy supports:

- MARKED_LINE_INVARIANTS.md
- HEADER_FOOTER_VALIDATION.md
- FORMATTING_INVARIANTS.md
- UOW_DOCTRINE.md
- UNDEFINED_BEHAVIOR.md
- CONTEXT_RECONSTRUCTION_INVARIANT.md

This doctrine ensures that identity is always deterministic, even when the destination file is not.

---------------------------------------------------------------------

## 6. Operator Postconditions

After reading this document, the operator must be able to state:

1. A complete, identity‑bearing buffer is authoritative.
2. Editor identity must match buffer identity.
3. Valid Start and End Marked Lines are mandatory.
4. Near‑misses in the destination file are irrelevant in this case.
5. The destination file’s contents are ignored.
6. The paste becomes a full‑document replacement.
7. This rule applies only to complete, valid, identity‑bearing buffers.

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/ops/FULL_BUFFER_IDENTITY_SUPREMACY.md\>
