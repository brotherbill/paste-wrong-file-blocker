###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/ops/MARKED_LINE_INVARIANTS.md\>
# MARKED_LINE_INVARIANTS.md
### Purpose
Defines the exact, non‑negotiable identity rules for Marked Lines.
Ensures that Marked Lines cannot drift, mutate, or degrade.
Prevents “almost correct” Marked Lines from being treated as valid, except in the single allowed case of a complete buffer replacement.

---------------------------------------------------------------------

## 0. Rationale

Marked Lines are identity‑bearing structures.

If Marked Lines drift:

- identity becomes ambiguous
- header/footer validation becomes unreliable
- paste rules cannot be applied deterministically
- rollback becomes unsafe
- re‑entry becomes unsafe
- UB becomes possible
- doctrine becomes unenforceable

Therefore, the definition of a Marked Line must be **tight**, **literal**, and **byte‑exact**.

---------------------------------------------------------------------

## 1. Marked Line Definition (Tight)

A Marked Line is defined as:

1. **A single, complete line**
2. **Whose content matches the canonical Marked Line pattern exactly**
3. **With no additional characters**
4. **With no missing characters**
5. **With no whitespace differences**
6. **With no encoding differences**
7. **With no alternate punctuation**
8. **With no alternate casing**

A Marked Line is **not** a concept.
It is a **literal identity string**.

Anything else is **not** a Marked Line.

---------------------------------------------------------------------

## 2. Near‑Miss Marked Lines

A “near‑miss” is any line that:

- looks similar
- is visually close
- differs only by whitespace
- differs only by punctuation
- differs only by casing
- differs only by indentation
- differs only by invisible characters
- differs only by Unicode normalization

Near‑misses are **invalid**.

Near‑misses must **never** be treated as Marked Lines.

Near‑misses must **never** be auto‑corrected.

Near‑misses must **never** be silently accepted.

Near‑misses must be treated as **identity violations**.

---------------------------------------------------------------------

## 3. Required System Behavior

### 3.1 Invalid Marked Line Detection

When a file contains a near‑miss Marked Line, the system must classify the file as:

```
CRITICAL: Marked Line Identity Violation
```

### 3.2 Paste Behavior for Invalid Files

Paste Wrong File Blocker must:

- apply the **invalid‑file paste rules**, or
- reject the paste outright, or
- block the paste with a modal, or
- require explicit override

Under no circumstances may the system:

- treat the file as valid
- treat the near‑miss as a Marked Line
- attempt to “fix” the near‑miss automatically
- assume operator intent

### 3.3 Operator Notification

The modal must include:

- expected Marked Line
- actual line found
- reason for rejection
- violated invariant
- risk of proceeding

---------------------------------------------------------------------

## 4. Exception: Complete Buffer Copy With Valid Marked Lines

This is the **one and only exception** to the near‑miss rule.

A near‑miss in the **existing file** may be ignored **only if all conditions below are true**:

1. The pasted buffer contains:
   - a **valid Start Marked Line**, and
   - a **valid End Marked Line**
2. The buffer is a **complete document copy**, not a fragment
3. The buffer’s Marked Lines are **exact**, with no drift
4. The buffer’s internal content is structurally valid
5. The paste operation replaces the **entire file**, not a region

If all conditions hold:

- the buffer’s Marked Lines become the new canonical identity
- the existing file’s near‑misses are irrelevant
- the paste is treated as a **full‑document replacement**
- the system applies **full‑document paste rules**, not invalid‑file rules

### 4.1 Why This Exception Exists

A complete buffer copy with valid Marked Lines is:

- self‑contained
- identity‑bearing
- authoritative
- safe to replace the entire file

Rejecting such pastes would block legitimate full‑document updates.

### 4.2 This Exception Does *Not* Apply To:

- partial pastes
- fragments
- buffers missing either Marked Line
- buffers with near‑miss Marked Lines
- buffers with mutated identity wrappers
- buffers with whitespace‑damaged wrappers
- buffers with only one wrapper
- buffers with wrapper order reversed

Only a **complete, valid, identity‑bearing buffer** qualifies.

---------------------------------------------------------------------

## 5. Interaction With Other Doctrines

Marked Line invariants support:

- HEADER_FOOTER_VALIDATION.md
- FORMATTING_INVARIANTS.md
- UOW_DOCTRINE.md
- UNDEFINED_BEHAVIOR.md
- CONTEXT_RECONSTRUCTION_INVARIANT.md
- FRY_THE_PATIENT_MAPPING.md

Marked Line drift is a precursor to UB.
Marked Line invariants prevent drift.

---------------------------------------------------------------------

## 6. Operator Postconditions

After reading this document, the operator must be able to state:

1. A Marked Line is a literal identity string.
2. Near‑misses are invalid.
3. Near‑misses must never be auto‑corrected.
4. Near‑misses must trigger invalid‑file paste rules.
5. A complete buffer copy with valid Marked Lines is the **only** exception.
6. The buffer becomes authoritative in that case.
7. Marked Line drift produces UB.
8. Tightness is mandatory for safety.

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/ops/MARKED_LINE_INVARIANTS.md\>
