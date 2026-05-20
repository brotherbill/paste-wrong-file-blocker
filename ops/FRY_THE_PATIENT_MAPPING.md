###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/ops/FRY_THE_PATIENT_MAPPING.md\>
# FRY_THE_PATIENT_MAPPING.md
### Purpose  
Maps the UL‑term **FRY THE PATIENT** to all ops‑layer doctrines, workflows, and invariants that prevent this failure mode.  
Ensures cross‑layer consistency and prevents silent re‑introduction of the failure.

---------------------------------------------------------------------

## 0. UL‑Term Definition

**FRY THE PATIENT**  
A catastrophic failure caused by resuming a multi‑step process at the wrong step after an interruption, distraction, or context loss.

---------------------------------------------------------------------

## 1. Ops‑Layer Doctrines That Implement This Rule

### 1.1 OPERATOR_INTERRUPT_RECOVERY.md  
- Prevents incorrect resumption  
- Requires context reconstruction  
- Forces re‑reading doctrine, logs, anomalies  
- Eliminates blind spots before continuing  

### 1.2 OPERATOR_DRIFT_DETECTION.md  
- Detects reduced vigilance  
- Detects skipped steps  
- Detects assumption‑based resumption  
- Detects cognitive drift after interruptions  

### 1.3 OPERATOR_RHYTHM_AND_FRICTION.md  
- Maintains cadence  
- Prevents habituation  
- Ensures operator does not “slide” back into a task mid‑stream  
- Preserves explicit step boundaries  

### 1.4 BIG_AND_OBVIOUS_FAILURES_RULE.md  
- Ensures mis‑resumption is visible  
- Prevents silent continuation after an interruption  
- Forces operator to confront incorrect state  

---------------------------------------------------------------------

## 2. Workflow Files That Enforce This Rule

### DAILY_OPERATOR_WORKFLOW.md  
- Requires daily context reset  
- Prevents mid‑stream resumption across days  

### WEEKLY_OPERATOR_WORKFLOW.md  
- Forces consolidation before continuing  
- Prevents multi‑day drift accumulation  

### MONTHLY_OPERATOR_SUMMARY.md  
- Ensures no anomalies or drift survive the month  
- Forces final reconciliation of all steps  

---------------------------------------------------------------------

## 3. Test Matrix Implications

FRY THE PATIENT must be tested through:

- Interrupted paste events  
- Interrupted anomaly classification  
- Interrupted doctrine updates  
- Interrupted multi‑cursor operations  
- Interrupted range normalization events  

All must fail **big and obvious** if resumed incorrectly.

---------------------------------------------------------------------

## 4. Enforcement

This mapping is mandatory for:

- All doctrine updates  
- All ops‑layer changes  
- All test matrix expansions  
- All release and rollback workflows  

Any new file must declare whether it intersects with FRY THE PATIENT.

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/ops/FRY_THE_PATIENT_MAPPING.md\>
