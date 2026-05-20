###### Start of Document </C/dev/repos/paste-wrong-file-blocker/ops/SAFE_POINT_ATOMICITY.md>
# SAFE_POINT_ATOMICITY.md
### Purpose
Defines the atomicity requirements for safe points.
Establishes the non‑negotiable rule that **safe points exist ONLY between Units of Work (UOWs)**.
Within a UOW, **there are no safe points** — only active, unsafe, mid‑operation states.

---------------------------------------------------------------------

## 0. Rationale

A safe point is only safe if it is **atomic** and **between UOWs**.

Inside a UOW:

- operations are in flight
- invariants may be temporarily violated
- state may be partially transformed
- assumptions may not yet hold
- context may be incomplete
- reconstruction is impossible

Therefore:

# **There are ZERO safe points inside a UOW.**
# **Every UOW must run to completion or be rolled back.**

Any pause inside a UOW is an unsafe state and must be treated as such.

---------------------------------------------------------------------

## 1. Core Invariant

**A safe point can ONLY occur between UOWs.**
A UOW has no internal safe points, no internal pause points, and no internal recovery points.

A safe point must be:

- fully before a UOW
- or fully after a UOW

Never inside.

There is no such thing as a “mid‑UOW safe point.”

---------------------------------------------------------------------

## 2. Atomicity Requirements

A safe point is atomic only if:

- The previous UOW is fully complete
- The next UOW has not yet begun
- No partial edits exist
- No partial classifications exist
- No partial doctrine updates exist
- No partial test matrix entries exist
- No mid‑operation editor state exists
- No pending decisions exist
- No assumptions are required

If any of these conditions fail, the point is **not atomic** and therefore **not a safe point**.

---------------------------------------------------------------------

## 3. UOW Rollback Requirements

Not all UOWs are equal.

### **3.1 Some UOWs require explicit rollback steps**
These UOWs modify state in ways that cannot be abandoned safely.
They require a defined rollback sequence to restore the last known safe point.

Examples include:

- multi‑file edits
- doctrine updates
- anomaly classifications
- test matrix entries
- refactors
- editor‑range normalization investigations

If interrupted, these UOWs must be rolled back using their explicit rollback steps.

### **3.2 Some UOWs require *no* rollback steps**
These UOWs do not modify persistent state and can be abandoned without harm.

Examples include:

- read‑only inspections
- passive verification steps
- non‑mutating checks
- observational UOWs

If interrupted, these UOWs simply terminate; no rollback is required.

### **3.3 Operator Responsibility**
Before beginning a UOW, the operator must know:

- whether it requires explicit rollback
- whether it requires no rollback
- what the rollback steps are (if any)
- what the last safe point is

A UOW must never begin without this knowledge.

---------------------------------------------------------------------

## 4. Real‑World Analogy: Rebuilding an OS From a USB Flash Drive

Rebuilding an operating system from a USB installer is a perfect example of UOW atomicity.

### **4.1 The UOW: “Write OS to disk”**
Once the installer begins writing the OS to disk:

- the partition table is in flux
- the filesystem is in flux
- the bootloader is in flux
- the OS image is partially written
- the machine is in a non‑bootable state

This is a **mid‑UOW unsafe state**.

There are **no safe points** inside this UOW.

### **4.2 If interrupted mid‑UOW**
If power is lost or the operator stops mid‑install:

- the disk is left in an undefined state
- the OS is not bootable
- the machine cannot continue
- the machine cannot recover
- rollback is impossible

The only valid action is:

**Start over from the beginning of the UOW.**

### **4.3 Before and after are the only safe points**

- Before the install begins → safe
- After the install completes → safe
- Anywhere in between → unsafe

This is the exact structure of UOW atomicity.

---------------------------------------------------------------------

## 5. Atomicity Failure Modes

A safe point becomes non‑atomic when the operator is **inside** a UOW:

- mid‑edit
- mid‑classification
- mid‑refactor
- mid‑paste event
- mid‑range investigation
- mid‑doctrine update
- mid‑test matrix entry
- mid‑decision
- mid‑rollback
- mid‑context reconstruction

Or when the environment interrupts a UOW:

- editor reloads mid‑operation
- clipboard changes mid‑operation
- extension reloads mid‑operation
- workspace trust changes mid‑operation

All of these are **unsafe** and require rollback to the last known safe point (i.e., the last completed UOW).

---------------------------------------------------------------------

## 6. Atomicity Enforcement

To enforce atomicity:

1. Complete the current UOW
2. Verify no partial operations remain
3. Verify all invariants hold
4. Verify editor state is stable
5. Verify clipboard state is stable (if relevant)
6. Confirm that no UOW is in progress
7. Mark the point as safe
8. Only then may the operator pause, switch tasks, or re‑enter later

Atomicity is a **hard precondition** for pausing.

---------------------------------------------------------------------

## 7. Interaction With Other Doctrines

- **SAFE_POINT_DEFINITION.md**
  Defines what a safe point is; atomicity defines when it can exist.

- **SAFE_POINT_VISIBILITY.md**
  Requires that safe points be visibly between UOWs.

- **SAFE_POINT_ROLLBACK_RULE.md**
  Requires rollback when atomicity cannot be confirmed.

- **STATE_REENTRY_PROTOCOL.md**
  Requires atomicity before re‑entry is permitted.

- **CONTEXT_RECONSTRUCTION_INVARIANT.md**
  Requires atomicity for reconstruction to succeed.

- **FRY_THE_PATIENT_MAPPING.md**
  Identifies mid‑UOW interruption as a primary catastrophic failure mode.

---------------------------------------------------------------------

## 8. Test Requirements

Test cases must include:

- Attempted pause inside a UOW
- Attempted re‑entry inside a UOW
- Editor reloads inside a UOW
- Clipboard changes inside a UOW
- Partial anomaly classifications
- Partial doctrine updates
- Partial test matrix entries
- Partial refactors
- Partial paste events
- UOWs requiring explicit rollback
- UOWs requiring no rollback
- OS‑install‑style mid‑operation interruption

All must fail **big and obvious**.

---------------------------------------------------------------------

###### End of Document </C/dev/repos/paste-wrong-file-blocker/ops/SAFE_POINT_ATOMICITY.md>
