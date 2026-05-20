###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/ops/STATE_REENTRY_PROTOCOL.md\>
# STATE_REENTRY_PROTOCOL.md
### Purpose  
Defines the mandatory protocol for re‑entering any operational state after a pause, interruption, or context loss.  
Ensures the operator never re‑enters a workflow at an ambiguous or unsafe point.

---------------------------------------------------------------------

## 0. Rationale

State re‑entry is one of the highest‑risk phases in any workflow.  
Most catastrophic failures originate from:

- incorrect assumptions about prior state  
- partial memory of what was happening  
- implicit continuation  
- skipping the re‑alignment step  

This protocol eliminates ambiguity and prevents FRY THE PATIENT at the state‑machine level.

---------------------------------------------------------------------

## 1. Core Rule

**No state may be re‑entered without explicit verification of the last known safe point.**

If the last safe point cannot be identified, operator must roll back to the previous confirmed state.

---------------------------------------------------------------------

## 2. State Re‑Entry Steps

Before re‑entering any state:

1. Identify the state name  
2. Identify the last confirmed safe point  
3. Re‑read the surrounding context  
4. Re‑validate all active invariants  
5. Re‑confirm editor state  
6. Re‑confirm clipboard state (if relevant)  
7. Re‑confirm anomaly status  
8. Re‑confirm doctrine alignment  
9. Only then resume the operation  

If any step fails, operator must step back one state.

---------------------------------------------------------------------

## 3. State Categories

This protocol applies to:

- Editing states  
- Classification states  
- Doctrine update states  
- Test matrix update states  
- Multi‑cursor states  
- Paste event states  
- Range normalization states  
- Monitoring states  
- Release/rollback states  

No state is exempt.

---------------------------------------------------------------------

## 4. Interaction With Other Doctrines

- **CONTEXT_RECONSTRUCTION_INVARIANT.md**  
  Provides the invariant this protocol enforces.

- **OPERATOR_INTERRUPT_RECOVERY.md**  
  Handles interruptions; this protocol handles re‑entry.

- **FRY_THE_PATIENT_MAPPING.md**  
  Identifies state re‑entry as a primary risk vector.

- **OPERATOR_DRIFT_DETECTION.md**  
  Detects when re‑entry is performed incorrectly.

---------------------------------------------------------------------

## 5. Test Requirements

Test cases must include:

- Re‑entry after short interruptions  
- Re‑entry after long interruptions  
- Re‑entry after editor reload  
- Re‑entry after environment change  
- Re‑entry after partial classification  
- Re‑entry during multi‑cursor operations  

All must either:

- re‑enter safely, or  
- fail big and obvious.

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/ops/STATE_REENTRY_PROTOCOL.md\>
