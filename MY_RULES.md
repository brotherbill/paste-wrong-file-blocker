###### Start of Document \<C:/dev/repos/paste-wrong-file-blocker/MY_RULES.md\>
# MY_RULES.md
### Purpose: Defines the operator‑grade rules governing all artifacts in the PasteShield repository

---------------------------------------------------------------------

## 0. Scope and Authority

### 0.0 Mission Context
PasteShield is a safety‑critical subsystem.
Its correctness depends on strict doctrine, deterministic behavior, and zero ambiguity.
All artifacts must comply with this document.

Violation classification:
```
CRITICAL: Loss of Determinism (LOD)
```

---

### 0.1 Total Repository Coverage
MY_RULES.md governs **every artifact** in the repository, including:

- Source code (`.ts`, `.js`, `.json`, `.yaml`, `.yml`, `.md`, `.html`, `.css`, `.svg`, `.lock`, and future types)
- Documentation (READMEs, specs, design notes, diagrams, comments, commit messages)
- Operational artifacts (issues, PR templates, governance files, release notes)
- Automation (CI/CD, build scripts, lint rules, formatting rules, test harnesses)
- Generated artifacts
- Human‑written artifacts (comments, discussions, decisions, rationales)
- Implicit artifacts (assumptions, conventions, tribal knowledge)

If it influences the repository, it is governed.

---

### 0.2 Doctrinal Supremacy
If any artifact conflicts with MY_RULES.md:

1. MY_RULES.md wins.
2. The artifact is incorrect.
3. The artifact must be corrected or removed.
4. No exceptions exist unless explicitly defined here.
5. Silence requires rule creation, not assumption.

---

### 0.3 Change Control Protocol
Any modification to MY_RULES.md must be:

- **Deliberate** — no casual edits
- **Reviewed** — formal self‑review required
- **Versioned** — commit message must document:
  - reason for change
  - rule modified
  - expected impact
  - invariants preserved
  - invariants intentionally altered
- **Traceable** — rationale must be obvious
- **Stable** — no ambiguity or drift
- **Reversible** — rollback must be trivial

---

### 0.4 Canonical Pattern
```
IF (Artifact X conflicts with MY_RULES.md)
THEN (Artifact X is a violation)
AND (Artifact X must be aligned)
BEFORE (X may influence the repository again)
```

---

### 0.5 Violation Examples
**Incorrect:**
- README describes behavior not enforced by code
- Script bypasses a safety rule
- New file type added without defining rules
- PR modifies MY_RULES.md directly on `main`
- Comment contradicts doctrine
- CI workflow introduces unapproved behavior

**Correct:**
- Updating docs to reflect existing rules
- Adding rules before adding features
- Rejecting PRs that violate invariants
- Adding clarifying examples
- Creating new sections for new artifact types

---

### 0.6 Postconditions
A contributor must be able to state:

1. MY_RULES.md governs everything
2. MY_RULES.md overrides everything
3. Changes must be deliberate, reviewed, versioned, traceable, stable, reversible
4. Hierarchy of truth:
   ```
   MY_RULES.md → Everything Else
   ```
5. Violations produce LOD

---------------------------------------------------------------------

## 1. Audience Doctrine

### 1.0 Mission Context
PasteShield prevents accidental full‑document replacement.
The failure mode is universal.

Violation classification:
```
CRITICAL: Misaligned Audience Model (MAM)
```

---

### 1.1 Primary Audience
Anyone capable of pasting text and accidentally destroying a file.

### 1.2 Secondary Audience
Maintainers, reviewers, and documentation authors.

### 1.3 Audience Constraints
Artifacts must be:

- clear
- precise
- stable
- accessible
- aligned with the safety model

Assume zero prior knowledge.

### 1.4 Prohibited Assumptions
No artifact may assume the user understands:

- VS Code internals
- clipboard mechanics
- extension activation
- buffer identity
- file mutation semantics
- PasteShield architecture
- documentation before usage
- code before usage

### 1.5 Violation Examples
**Incorrect:**
- Documentation requiring VS Code knowledge
- Comments referencing undefined invariants
- Code relying on user expertise
- PRs understandable only to senior engineers

**Correct:**
- Plain explanations
- Realistic examples
- Comments assuming no prior knowledge
- Adding definitions for new terms

### 1.6 Postconditions
Contributors must know:

- who the audience is
- what assumptions are allowed
- what clarity requires
- what MAM means

---------------------------------------------------------------------

## 2. Language and Tone Doctrine

Language must be:

- dry
- literal
- procedural
- operator‑grade

Prohibited:

- humor
- marketing
- metaphors
- filler
- narrative drift

Every sentence must add operational information.

---------------------------------------------------------------------

## 3. Determinism and Reproducibility Doctrine

All specifications must be:

- deterministic
- reproducible
- verifiable

No hidden defaults or implicit assumptions.

Processes must define:

- preconditions
- success conditions
- failure detection
- recovery steps

---------------------------------------------------------------------

## 4. Undefined Behavior (UB) Doctrine

UB = any condition that breaks a defined invariant.

Documents must:

- identify UB
- prohibit UB
- avoid reliance on UB

No workflow may depend on UB.

---------------------------------------------------------------------

## 5. Patterned Document Structure

### 5.1 Abstract Pattern Notation
Patterns use escaped angle brackets:
```
\<identifier\>
```

### 5.2 Single‑String Pattern Rule
A pattern contains exactly one identifier.
No literals.
No slashes.

### 5.3 Optional Guidance
Non‑binding, human‑oriented content.

### 5.4 Marked Document Requirements
Mandatory Elements:

1. **Start of Document Wrapper**
   ```
   ###### Start of Document \<absolute-path/filename\>
   ```

2. **End of Document Wrapper**
   ```
   ###### End of Document \<absolute-path/filename\>
   ```

These two lines define the identity wrapper for all doctrinal and identity‑bearing files.

### 5.4.3 Syntax‑Restricted File Exemption
Files without comment support (e.g., `.json`, `.lock`) are exempt.

### 5.5 Cross‑References
Must obey pattern rules.

### 5.6 Summary
Patterns define structure.
Mandatory Elements define validity.

---------------------------------------------------------------------

## 6. Code and Configuration Rules

- Every line must earn its right to exist
- Code must be minimal, readable, defensible
- Comments explain why when not obvious
- No hidden global state
- Defaults must be safe and documented

---------------------------------------------------------------------

## 7. Extension‑Specific Doctrine

Extension behavior must be:

- predictable
- explicit
- documented

No background behavior without explicit user initiation.

---------------------------------------------------------------------

## 8. AI Usage Doctrine

AI may draft but not define doctrine.
AI output must be reviewed and aligned.
AI must not introduce undocumented behavior.

---------------------------------------------------------------------

## 9. Change Control Doctrine

Changes must be intentional, reviewed, and documented.
Breaking changes require explicit rationale.
No silent doctrinal changes.

---------------------------------------------------------------------

## 10. Override Doctrine

Overrides are rare and deliberate.

Blocked paste guarantees:

- no mutation
- no cursor movement
- no partial writes
- no undo pollution

Modal must display:

- expected file identity
- actual file identity
- reason for block
- violated invariant
- risk of proceeding

Override requires typed confirmation:
```
confirmPasteOverride
```

No copy‑paste, autocomplete, autofill, or shortcuts.

Overrides are logged.

Multiple overrides → disable PasteShield temporarily.

---------------------------------------------------------------------

## 11. Header/Footer Validation Doctrine

### 11.1 Whitespace‑Tolerant Match
Header/footer lines are accepted if correct except for whitespace differences.

Normalization:

- remove leading whitespace
- remove trailing whitespace
- collapse internal whitespace

If normalized text matches canonical form, it is valid.

### 11.2 Duplicate Header/Footer Rejection
If pasted content contains:

- more than one Start wrapper, or
- more than one End wrapper

→ paste is rejected.

A valid document contains exactly one Start wrapper and exactly one End wrapper.

---------------------------------------------------------------------

###### End of Document \<C:/dev/repos/paste-wrong-file-blocker/MY_RULES.md\>
