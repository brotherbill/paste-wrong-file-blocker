# MY_RULES.md
### Purpose: Defines the operator-grade rules for all work in the PasteShield repository
###### <C:/dev/repos/paste-shield/MY_RULES.md>

## 0. Scope and Authority  

### 0.0 Mission Context  
PasteShield is a safety‑critical subsystem.  
It is small in size but high in consequence.  
This section defines the **operational envelope**, **command hierarchy**, and **doctrinal supremacy** for all artifacts within the repository.

Failure to comply with this section is classified as:  
```
CRITICAL: Loss of Determinism (LOD)
```

---

### 0.1 Total Repository Coverage  
The authority of MY_RULES.md extends to **every artifact** in the repository without exception.

Coverage includes:

- **Source Code:** `.ts`, `.js`, `.json`, `.yaml`, `.yml`, `.md`, `.html`, `.css`, `.svg`, `.lock` files, and any future file types.  
- **Documentation:** READMEs, specs, design notes, architecture diagrams, inline comments, commit messages.  
- **Operational Artifacts:** issue templates, PR templates, release notes, versioning policies, governance files.  
- **Automation:** CI/CD workflows, build scripts, lint rules, formatting rules, test harnesses, codegen outputs.  
- **Generated Artifacts:** anything produced by scripts or tools that becomes part of the repo.  
- **Human‑Written Artifacts:** comments, discussions, decisions, rationales, and explanatory notes.  
- **Implicit Artifacts:** conventions, assumptions, tribal knowledge, “common sense,” and undocumented expectations.

If it influences the repository, it is governed by MY_RULES.md.

---

### 0.2 Doctrinal Supremacy  
If any artifact, comment, convention, or external document conflicts with MY_RULES.md:

1. **MY_RULES.md wins.**  
2. The conflicting artifact is **incorrect**.  
3. The artifact must be **corrected, rewritten, or removed**.  
4. No exceptions exist unless explicitly defined in MY_RULES.md.  
5. Silence in MY_RULES.md is not permission; it is a requirement to define a rule.

This applies to:

- README.md  
- CONTRIBUTING.md  
- comments in code  
- GitHub Issues  
- GitHub Discussions  
- PR descriptions  
- external documentation  
- “industry norms”  
- “best practices”  
- “common sense”  

If it contradicts MY_RULES.md, it is wrong.

---

### 0.3 Change Control Protocol  
Any modification to MY_RULES.md must satisfy **all** of the following invariants:

- **Deliberate:**  
  No casual edits. No emotional edits. No “quick fixes.”  
  Every change must have a mission‑level justification.

- **Reviewed:**  
  Even in a solo repository, the author must perform a **formal self‑review**.  
  The review must be documented in the commit message.

- **Versioned:**  
  Every change must be committed with a message containing:  
  - the reason for the change  
  - the rule being modified  
  - the expected impact  
  - the invariants preserved  
  - the invariants intentionally altered (if any)

- **Traceable:**  
  The commit must make it obvious *why* the doctrine changed.

- **Stable:**  
  No change may introduce ambiguity, drift, contradiction, or undefined behavior.

- **Reversible:**  
  The change must be written such that rollback is trivial and deterministic.

---

### 0.4 Canonical Pattern (Abstract Rule)  
This pattern governs all conflict resolution:

```
IF (Artifact X conflicts with MY_RULES.md)
THEN (Artifact X is a violation)
AND (Artifact X must be aligned with MY_RULES.md)
BEFORE (X may influence the repository again)
```

This pattern is universal and applies to:

- code  
- comments  
- documentation  
- automation  
- behavior  
- expectations  
- conventions  
- decisions  

---

### 0.5 Violation Examples (Expanded)  
**Incorrect:**  
- README describes behavior not enforced by the code.  
- A script bypasses a safety rule defined in MY_RULES.md.  
- A contributor adds a new file type without defining its rules here.  
- A PR modifies MY_RULES.md directly on `main`.  
- A comment contradicts a rule defined in this document.  
- A CI workflow introduces behavior not permitted by this doctrine.  
- A commit message describes intent that contradicts MY_RULES.md.  
- A design note introduces terminology not defined in MY_RULES.md.  

**Correct:**  
- Updating README to reflect a rule already defined in MY_RULES.md.  
- Adding a new rule to MY_RULES.md *before* adding a new feature.  
- Rejecting a PR because it violates a documented invariant.  
- Adding violation examples to clarify ambiguous behavior.  
- Creating a new section to define rules for a new artifact type.  

---

### 0.6 Postconditions (Must Hold After Reading This Section)  
After reading Section 0, any contributor must be able to state:

1. **What MY_RULES.md governs:**  
   “Everything in the repository.”

2. **What happens when something conflicts with it:**  
   “MY_RULES.md wins.”

3. **How MY_RULES.md may be changed:**  
   “Deliberately, reviewed, versioned, traceable, stable, reversible.”

4. **What the repository’s hierarchy of truth is:**  
   ```
   MY_RULES.md → Everything Else
   ```

5. **What the operational consequence of violation is:**  
   ```
   CRITICAL: Loss of Determinism (LOD)
   ```

---------------------------------------------------------------------

## 1. Audience Doctrine

### 1.0 Mission Context  
PasteShield exists to prevent a class of human error that is universal, repeatable, and costly:  
accidental full‑document replacement via paste operations.  
This section defines who PasteShield serves, why they need it, and what assumptions may never be made about them.

Failure to comply with this section is classified as:
```
CRITICAL: Misaligned Audience Model (MAM)
```

---

### 1.1 Primary Audience: The Impacted Operator  
PasteShield is built for anyone who has ever:

- pasted the correct content into the wrong file,  
- overwritten valid work with the wrong buffer,  
- saved the corruption before noticing,  
- lost time, stability, or work because of it.

This includes:

- new developers,  
- experienced developers,  
- operators under time pressure,  
- multi‑window or multi‑monitor users,  
- polyglot developers using any language or file type,  
- anyone who uses VS Code as a daily tool.

If a human can paste text, they can trigger the failure mode PasteShield prevents.

---

### 1.2 Secondary Audience: Maintainers and Reviewers  
The secondary audience includes:

- engineers maintaining the extension,  
- reviewers validating behavior,  
- security‑minded contributors ensuring no UB enters the system,  
- documentation authors responsible for clarity and doctrinal alignment.

These individuals must understand not only what PasteShield does, but why it must do it deterministically.

---

### 1.3 Audience Constraints  
All artifacts in the repository must be:

- clear enough for a careful reader,  
- precise enough for an engineer,  
- stable enough for long‑term maintenance,  
- accessible to all skill levels,  
- consistent with the safety model.

Artifacts must assume zero prior knowledge beyond what is explicitly stated in MY_RULES.md.

---

### 1.4 Prohibited Assumptions  
No artifact may assume:

- the user understands VS Code internals,  
- the user understands clipboard mechanics,  
- the user understands extension activation events,  
- the user understands buffer identity,  
- the user understands file mutation semantics,  
- the user understands PasteShield’s internal architecture,  
- the user reads code before using the extension,  
- the user reads documentation before using the extension.

If an assumption is not explicitly documented, it is forbidden.

---

### 1.5 Violation Examples  
**Incorrect:**  
- Documentation that assumes the user knows how VS Code handles paste events.  
- Comments that reference internal invariants not defined in MY_RULES.md.  
- Code that relies on user expertise to avoid UB.  
- A PR that introduces behavior only understandable to senior engineers.  
- A design note that uses undefined terminology.

**Correct:**  
- Explaining behavior in plain language before introducing technical detail.  
- Providing examples that match real user failure modes.  
- Writing comments that assume no prior knowledge.  
- Rejecting a PR because it assumes user expertise.  
- Adding definitions for any new term of art.

---

### 1.6 Postconditions  
After reading Section 1, any contributor must be able to state:

1. Who PasteShield is for:  
   “Anyone who can paste text and accidentally destroy a file.”

2. Who PasteShield is not for:  
   “No one. The failure mode is universal.”

3. What assumptions may be made about the user:  
   “Only those explicitly documented.”

4. What the artifact quality bar is:  
   “Clear, precise, stable, accessible, and aligned with the safety model.”

5. What the operational consequence of violation is:
```
CRITICAL: Misaligned Audience Model (MAM)
```

---------------------------------------------------------------------

## 2. Language and Tone Doctrine

1. Language must be:
   - Dry.
   - Literal.
   - Procedural.
   - Operator-grade.

1. Prohibited:
   - Humor.
   - Cute language.
   - Marketing fluff.
   - Hype.
   - Metaphors that obscure mechanics.

1. Required:
   - Direct statements.
   - Explicit conditions.
   - Clear consequences.

1. Every sentence must add information. No filler.

---------------------------------------------------------------------

## 3. Determinism and Reproducibility Doctrine

1. All specifications and procedures must be:
   - Deterministic.
   - Reproducible.
   - Verifiable by a careful reader.

1. No step may rely on:
   - Hidden defaults.
   - Implicit behavior.
   - Unstated environment assumptions.

1. Every multi-step process must:
   - Start from a clearly defined precondition.
   - End with a clearly defined success condition.

1. If a step can fail, the document must:
   - State how it can fail.
   - State how to detect failure.
   - State how to recover or abort safely.

---------------------------------------------------------------------

## 4. Undefined Behavior (UB) Doctrine

1. UB means undefined behavior: the system has left the domain of defined behavior.
1. UB does not imply imminent failure; it implies absence of guarantees.
1. Any condition that breaks a defined invariant is UB.

1. Documents must:
   - Identify conditions that produce UB.
   - State that such conditions are prohibited.
   - Provide patterns that avoid UB.

1. No workflow or specification may rely on behavior in a UB state.

---------------------------------------------------------------------

## 5. Documentation Rules (ASCII Only, Pattern Correct)

PasteShield recognizes two classes of documents:

- **Marked documents** -- governed by strict structural invariants.
- **Unmarked documents** -- normal Markdown with no structural requirements.

---------------------------------------------------------------------

### 5.1 Abstract Pattern Notation (Doctrine Only)

The doctrine uses escaped angle brackets to denote abstract patterns.

- `\<filename\>`
- `\<path\>`
- `\<path/filename\>`

A pattern has up to one string.  
That string is replaced by the literal value.  
Inside a pattern, `<` and `>` are ordinary ASCII characters.

Patterns may be concatenated.

Composite pattern:

```
\<<path>\>\<<filename>\>
```

This is two patterns concatenated:

- `\<<path\>` expands to a literal path ending in `/`
- `\<filename>\>` expands to a literal filename

Concatenation produces:

```
<path/filename>
```

Concrete example:

```
<C:/dev/repos/paste-shield/MY_RULES.md>
```

---------------------------------------------------------------------

### 5.2 Marked Document Requirements

A marked document must contain the following elements.

---------------------------------------------------------------------

#### 1. Title Line

Abstract pattern:

```
# \<filename\>
```

Literal example:

```
# PASTESHIELD_RULES.md
```

---------------------------------------------------------------------

#### 2. Purpose Line

A short, human-readable statement describing the document's purpose.

---------------------------------------------------------------------

#### 3. Header Identity Line (Strict)

Abstract pattern:

```
###### \<<path>\>\<<filename>\>
```

Rules:

1. The header must expand to:

   ```
   ###### <absolute-path/filename>
   ```

2. The path must use Linux-style forward slashes (/) even on Windows.

3. The header must appear on a single line, delimited by "\n" or "\r\n".

4. The header must be exhaustively searchable as the literal:

   ```
   <absolute-path/filename>
   ```

5. Windows-style backslashes "\" are prohibited.

Literal example:

```
###### <C:/dev/repos/paste-shield/MY_RULES.md>
```

---------------------------------------------------------------------

#### 4. Footer Termination Line (Strict)

Abstract pattern:

```
###### End of Document \<filename\>
```

Rules:

1. The prefix must be exactly:

   ```
   ###### End of Document 
   ```

2. The filename must appear in literal angle brackets:

   ```
   <filename>
   ```

3. The footer must not include the path.  
   The path is already provided in the header.  
   This asymmetry is intentional.

Literal example:

```
###### End of Document <MY_RULES.md>
```

---------------------------------------------------------------------

### 5.3 Unmarked Documents

Unmarked documents:

- require no header,
- require no footer,
- require no structural invariants,
- must remain readable,
- and are not subject to doctrinal enforcement.

---------------------------------------------------------------------

### 5.4 Cross-References

Marked documents must use explicit filenames when referencing other files.

Prohibited vague references include:

- "the other document"
- "above"
- "that file over there"

Explicit filenames only.

---------------------------------------------------------------------

## 6. Code and Configuration Rules

1. Every line of code must earn its right to exist.

1. Code must be:
   - Minimal.
   - Readable.
   - Defensible.
   - Free of unnecessary abstraction.

1. Comments:
   - Explain why when the why is not obvious.
   - Must not contradict behavior.

1. No hidden magic:
   - No implicit global state without explicit documentation.
   - No undocumented side effects.

1. Defaults:
   - Must be safe.
   - Must be documented.

---------------------------------------------------------------------

## 7. Extension-Specific Doctrine

1. PasteShield is a VS Code extension. All extension behavior must be:
   - Predictable.
   - Explicit.
   - Documented.

1. No feature may modify user content without:
   - A clear trigger.
   - A clear description.
   - A clear opt-in.

1. All commands must:
   - Declare their inputs.
   - Declare their outputs.
   - Declare their side effects.

1. No background behavior may run without explicit user initiation.

---------------------------------------------------------------------

## 8. AI Usage Doctrine

1. AI may be used as a drafting tool, not as an authority.

1. All AI-generated content must be:
   - Reviewed by a contributor.
   - Aligned with MY_RULES.md.
   - Edited to remove personality or drift.

1. AI must not:
   - Introduce undocumented behavior.
   - Override doctrine.
   - Invent policies outside defined scope.

1. If AI output conflicts with MY_RULES.md, MY_RULES.md wins.

---------------------------------------------------------------------

## 9. Change Control Doctrine

1. Changes to MY_RULES.md must:
   - Be intentional.
   - Be reviewed.
   - Be described in commit messages.

1. Breaking changes to:
   - Architectural invariants,
   - Extension behavior,
   - User-facing semantics,
   require explicit, documented rationale.

1. No silent doctrinal changes are permitted.

---------------------------------------------------------------------

## 10. Override Doctrine

1. Overrides exist only for deliberate, intentional, high-risk operations.  
   They are not part of normal workflow.  
   They must be extremely rare.

1. A blocked paste is a failed paste.  
   No partial writes.  
   No buffer mutation.  
   No cursor movement.  
   No undo-stack pollution.  
   The file remains bit-for-bit identical.

1. When a paste is blocked, PasteShield presents a modal dialog.  
   The modal cannot be ignored.  
   The modal must be acknowledged before any further action.

1. The modal displays:
   - The expected file identity
   - The actual target file identity
   - The reason for the block
   - The invariant that was violated
   - The risk of proceeding

1. Overrides require typed confirmation:

```
confirmPasteOverride
```

Requirements:
- Case-sensitive
- No copy-paste
- No autocomplete
- No autofill
- No shortcuts

1. When the override is confirmed, PasteShield performs the paste atomically.

1. Every override event is logged with:
   - Timestamp
   - Source file identity
   - Target file identity
   - Paste size
   - Whether the paste replaced or inserted content

1. A status bar message confirms the override:
   PasteShield: Unsafe override executed.

1. If an operator needs to override more than once in a session, the correct action is to disable PasteShield temporarily.

1. Re-enabling PasteShield restores full safety immediately.

---------------------------------------------------------------------

###### End of Document <MY_RULES.md>
