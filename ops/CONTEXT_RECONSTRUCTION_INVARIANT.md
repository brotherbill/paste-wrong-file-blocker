###### Start of Document \<C:/dev/repos/paste-shield/ops/CONTEXT_RECONSTRUCTION_INVARIANT.md>
# CONTEXT_RECONSTRUCTION_INVARIANT.md
### Purpose  
Defines the invariant that no multi‑step operation may be resumed without explicit context reconstruction.  
Prevents FRY THE PATIENT and all related mis‑resumption failures.

---------------------------------------------------------------------

## 0. Rationale

Multi‑step operations are vulnerable to:

- interruptions  
- distractions  
- context loss  
- editor reloads  
- environment changes  

Resuming without reconstructing context creates hidden, catastrophic failure modes.

---------------------------------------------------------------------

## 1. Core Invariant

**No multi‑step operation may be resumed without explicit context reconstruction.**

If context is not fully known, the operation must not continue.

---------------------------------------------------------------------

## 2. Scope

This invariant applies to:

- anomaly classification  
- doctrine updates  
- test matrix updates  
- multi‑cursor edits  
- cross‑file edits  
- refactors  
- paste sequences  
- range normalization investigations  

---------------------------------------------------------------------

## 3. Required Reconstruction Steps

Before resuming, operator must:

- Re‑identify the operation  
- Re‑state the goal  
- Re‑locate the exact step last completed  
- Re‑read surrounding context (code, text, logs)  
- Re‑confirm editor state  
- Re‑confirm clipboard state (if relevant)  
- Re‑confirm any active invariants  

If any item is unclear, operator must step back to the last fully known safe point.

---------------------------------------------------------------------

## 4. Interaction With Other Doctrines

- **OPERATOR_INTERRUPT_RECOVERY.md**  
  Implements this invariant after interruptions.

- **OPERATOR_DRIFT_DETECTION.md**  
  Detects when reconstruction is skipped or degraded.

- **FRY_THE_PATIENT_MAPPING.md**  
  Identifies this invariant as a primary defense.

- **BIG_AND_OBVIOUS_FAILURES_RULE.md**  
  Requires mis‑resumption to fail visibly, not silently.

---------------------------------------------------------------------

## 5. Test Requirements

Test cases must include:

- Interrupted anomaly classification  
- Interrupted doctrine edits  
- Interrupted multi‑cursor operations  
- Interrupted paste sequences  
- Interrupted range investigations  

All must either:

- reconstruct context correctly, or  
- fail big and obvious before continuing.

---------------------------------------------------------------------

###### End of Document \<C:/dev/repos/paste-shield/ops/CONTEXT_RECONSTRUCTION_INVARIANT.md>
