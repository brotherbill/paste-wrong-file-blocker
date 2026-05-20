###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/ops/REENTRY.md\>
# REENTRY.md
### Purpose: Define deterministic operator re‑entry after interruption or drift

---------------------------------------------------------------------

## 0. Scope

This document defines the rules for operator re‑entry into work after any interruption, drift, confusion, or UB‑adjacent condition.

Re‑entry is a safety‑critical operation.

Violation classification:
```
CRITICAL: Loss of Determinism (LOD)
CRITICAL: Undefined Behavior (UB)
```

---------------------------------------------------------------------

## 1. Re‑Entry Definition

### 1.1 Re‑Entry

Re‑entry is the operator’s act of returning to controlled execution **from outside the current execution context**.

Re‑entry is only valid if the operator reconstructs context **from the file**, not from memory.

### 1.2 Prohibited Re‑Entry

The following are not valid re‑entry:

- “I think I was here.”
- “I remember what I was doing.”
- “I’ll just continue from this step.”
- “I’m pretty sure I was at the end.”

Any re‑entry attempt based on internal memory is UB.

---------------------------------------------------------------------

## 2. Re‑Entry Law

### 2.1 Law Statement

**LAW: Re‑entry must always begin at the first step after the last external safe point.**

Re‑entry is anchored to **safe points**, not to the operator’s memory and not necessarily to the top of the current UOW.

If each UOW **requires** an external archive at its start, then:
- the last external safe point = start of this UOW
- the first step after that safe point = Step 1 of this UOW
- in that case, `N == 1` and “restart the UOW from Step 1” is correct

If the last external safe point is **earlier** than the current UOW, the operator must resume from the first step after that earlier safe point, even if that is **N steps before** the current UOW.

### 2.2 Required Steps

Re‑entry requires:

1. **Stop.**
   The operator halts all internal execution.

2. **Return to the file.**
   The operator does not trust internal state.
   The file is the only source of truth.

3. **Locate the last external safe point.**
   The operator identifies the most recent recorded safe point in the file.

4. **Identify the first step after that safe point.**
   This is the re‑entry point.
   It may be:
   - Step 1 of the current UOW, or
   - a step in a prior UOW, if that is where the last safe point is anchored.

5. **Reconstruct context externally.**
   The operator reads:
   - relevant headers
   - purpose
   - preconditions
   - any notes associated with the safe point and subsequent steps

6. **Re‑enter at the identified step.**
   The operator begins execution at the first step after the last external safe point, with no assumptions beyond what is recorded.

7. **Execute continuously.**
   No gaps.
   No jumps.
   No “resume where I left off.”
   Continuous execution is required for determinism.

---------------------------------------------------------------------

## 3. Rationale

### 3.1 Human Working Memory Limits

Human working memory:

- cannot reliably reconstruct partial state
- cannot guarantee invariant preservation
- cannot safely resume mid‑stream
- cannot detect silent corruption

### 3.2 Safe Point Anchoring

Because memory is untrustworthy, re‑entry must be anchored to **external safe points**.

- Safe points are explicit, recorded, external states.
- Re‑entry always resumes from the first step after the last safe point.
- If every UOW requires an external archive at its start, re‑entry naturally aligns with UOW boundaries.

---------------------------------------------------------------------

## 4. Relationship to UB

### 4.1 UB Boundary

If the operator:

- attempts to resume from memory, or
- chooses a re‑entry point not anchored to the last external safe point

then the operator has entered **Undefined Behavior (UB)**.

UB is:

- irreversible
- unrecoverable from inside the corrupted context
- incompatible with safe operation

### 4.2 Required Response

Once UB is suspected or detected:

1. **Stop.**
2. **Abandon the current execution context.**
3. **Return to the last external safe point.**
4. **Re‑enter at the first step after that safe point.**

There is no valid “partial repair” from inside UB.

---------------------------------------------------------------------

## 5. Operator Postconditions

After reading and accepting this document, the operator must be able to state:

1. Re‑entry is anchored to the last external safe point.
2. Re‑entry always begins at the first step after that safe point.
3. Memory‑based re‑entry is UB.
4. The file is the only source of truth for re‑entry.
5. If each UOW requires external archiving, re‑entry at Step 1 of the UOW is correct because the safe point is there.
6. UB requires external restoration and safe‑point‑anchored re‑entry.

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/ops/REENTRY.md\>
