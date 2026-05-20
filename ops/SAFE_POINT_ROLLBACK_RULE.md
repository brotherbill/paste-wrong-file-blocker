###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/ops/SAFE_POINT_ROLLBACK_RULE.md\>
# SAFE_POINT_ROLLBACK_RULE.md
### Purpose  
Defines the mandatory rule for rolling back to the last confirmed safe point whenever state, context, or invariants cannot be fully reconstructed.  
Prevents unsafe continuation and eliminates FRY THE PATIENT failure modes.

---------------------------------------------------------------------

## 0. Rationale

When the operator cannot:

- identify the last completed step  
- identify the next step  
- confirm invariants  
- confirm editor or clipboard state  
- reconstruct context  

…the workflow is no longer safe.

Continuing from an unsafe point is indistinguishable from guessing — and guessing is catastrophic.

Rollback is the only safe action.

---------------------------------------------------------------------

## 1. Core Rule

**If a safe point cannot be confirmed, operator must roll back to the last known safe point.**

No exceptions.  
No assumptions.  
No partial continuation.

---------------------------------------------------------------------

## 2. Rollback Conditions

Rollback is mandatory when:

- operator is unsure of the last completed step  
- operator is unsure of the next step  
- invariants are unclear  
- editor state is unclear  
- clipboard state is unclear  
- anomaly classification is mid‑stream  
- doctrine update is mid‑edit  
- test matrix entry is incomplete  
- interruption occurred during a multi‑step operation  

If any condition is true, rollback must occur.

---------------------------------------------------------------------

## 3. Rollback Procedure

1. Stop all editing  
2. Identify the last confirmed safe point  
3. Re‑open the context around that point  
4. Re‑validate invariants  
5. Re‑validate editor state  
6. Re‑validate clipboard state (if relevant)  
7. Resume from the safe point — not from memory  

If no safe point exists, operator must restart the operation from the beginning.

---------------------------------------------------------------------

## 4. Interaction With Other Doctrines

- **SAFE_POINT_DEFINITION.md**  
  Defines what qualifies as a safe point.

- **STATE_REENTRY_PROTOCOL.md**  
  Uses rollback when re‑entry cannot be validated.

- **CONTEXT_RECONSTRUCTION_INVARIANT.md**  
  Requires rollback when reconstruction fails.

- **OPERATOR_INTERRUPT_RECOVERY.md**  
  Triggers rollback after interruptions.

- **FRY_THE_PATIENT_MAPPING.md**  
  Identifies rollback as the primary defense.

---------------------------------------------------------------------

## 5. Test Requirements

Test cases must include:

- Attempted resumption from an unsafe point  
- Interrupted operations with no safe point  
- Editor reloads during unsafe states  
- Clipboard changes during unsafe states  
- Partial anomaly classifications  
- Partial doctrine updates  

All must trigger rollback **immediately and visibly**.

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/ops/SAFE_POINT_ROLLBACK_RULE.md\>
