###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/ops/UOW_DOCTRINE.md\>
# UOW_DOCTRINE.md
### Purpose
Defines the complete doctrine for Units of Work (UOWs).
Establishes UOWs as the fundamental atomic structure of all operator activity, not only machine level operations.
Ensures that operators can follow the system with the same clarity and safety as a NASA grade manual.

---------------------------------------------------------------------

## 0. Rationale

Most architects treat UOWs as a machine level concept.
This doctrine rejects that limitation.

Human operators are part of the system.
Therefore, human actions must follow UOW rules.

A UOW is the smallest indivisible unit of operator work that:

- has a defined entry point
- has a defined exit point
- has no internal safe points
- has no internal pause points
- has no internal recovery points
- may require explicit rollback steps
- may require no rollback steps
- must be restarted from the top if interrupted
- must never be entered in the middle

UOWs are the backbone of:

- safe points
- rollback
- re entry
- drift prevention
- anomaly classification
- editor state integrity
- clipboard state integrity
- doctrine updates
- test matrix updates

Without UOW discipline, the system becomes unsafe.

---------------------------------------------------------------------

## 1. Definition

A Unit of Work is a bounded, atomic, operator level action that:

- begins at its top
- ends at its defined exit
- cannot be entered in the middle
- cannot be paused in the middle
- cannot be reconstructed from memory
- must be restarted if interrupted
- may or may not require rollback steps

A UOW is not defined by duration.
It is defined by atomicity and boundaries.

---------------------------------------------------------------------

## 2. UOW Boundaries

A UOW begins when:

- the operator commits to a specific action
- the operator enters a state that cannot be abandoned safely
- the operator begins modifying persistent state
- the operator begins a classification, update, or refactor
- the operator begins any action that requires invariants to hold

A UOW ends when:

- all steps have been followed in order
- the UOW exits at its defined end
- all invariants hold
- no partial state exists
- no pending decisions exist
- the operator can safely pause
- the operator can safely re enter later

Between UOWs is safe.
Inside a UOW is unsafe.

---------------------------------------------------------------------

## 3. UOW Categories

### 3.1 UOWs that require explicit rollback steps
These UOWs modify persistent state and cannot be abandoned safely.

Examples:

- doctrine updates
- anomaly classifications
- test matrix entries
- multi file edits
- refactors
- editor range normalization investigations

If interrupted, these UOWs must be rolled back using their explicit rollback steps.

### 3.2 UOWs that require no rollback steps
These UOWs do not modify persistent state and can be abandoned without harm.

Examples:

- read only inspections
- passive verification steps
- non mutating checks
- observational UOWs

If interrupted, these UOWs simply terminate.

### 3.3 Operator Responsibility
Before beginning a UOW, the operator must know:

- which category it belongs to
- whether rollback is required
- what the rollback steps are
- what the last safe point is

A UOW must never begin without this knowledge.

---------------------------------------------------------------------

## 4. Interrupt Rule

Human UOWs are interruptible by higher priority real life events.

Legitimate interrupts include:

- a needy child
- the doorbell
- a phone call
- a fire alarm
- dinner is ready and family time takes priority

These interrupts do not violate the doctrine.
They override the UOW.

When a legitimate interrupt occurs:

- the UOW is abandoned
- rollback rules apply if defined
- or the UOW is restarted from the top

This is a feature, not a failure.

---------------------------------------------------------------------

## 5. No Safe Points Inside a UOW

This doctrine is absolute.

There are zero safe points inside a UOW.
Safe points exist only between UOWs.

Inside a UOW:

- state is in flux
- invariants may be temporarily violated
- assumptions may not yet hold
- reconstruction is impossible
- rollback may be required

Any pause inside a UOW is an unsafe state.

---------------------------------------------------------------------

## 6. Real World Analogy: Rebuilding an OS From a USB Flash Drive

Rebuilding an operating system from a USB installer is the perfect analogy.

### 6.1 The UOW: Write OS to disk
Once the installer begins writing the OS:

- the partition table is in flux
- the filesystem is in flux
- the bootloader is in flux
- the OS image is partially written
- the machine is in a non bootable state

This is a mid UOW unsafe state.

There are no safe points inside this UOW.

### 6.2 If interrupted mid UOW
If power is lost or the operator stops mid install:

- the disk is left in an undefined state
- the OS is not bootable
- the machine cannot continue
- rollback is impossible

The only valid action is:

Start over from the beginning of the UOW.

### 6.3 Before and after are the only safe points

- Before the install begins is safe
- After the install completes is safe
- Anywhere in between is unsafe

This is the exact structure of UOW atomicity.

---------------------------------------------------------------------

## 7. Entering a UOW Anywhere Other Than Its Top

Entering a UOW anywhere other than its defined top is a violation of UOW doctrine.

This action produces Undefined Behavior.
See UNDEFINED_BEHAVIOR.md for the full doctrine.

---------------------------------------------------------------------

## 8. The Three Operator Rules for UOWs

1. Enter at the top only.
2. Follow each step in order, leaving the UOW only when instructed or when all steps are complete.
3. No rogue jumping around.

These three rules are the operator grade equivalent of structured programming discipline.

---------------------------------------------------------------------

## 9. UOW Failure Modes

A UOW becomes unsafe when:

- the operator pauses mid operation
- the operator switches tasks mid operation
- the editor reloads mid operation
- the clipboard changes mid operation
- the extension reloads mid operation
- workspace trust changes mid operation
- partial state exists
- invariants do not hold

All of these conditions may lead to Undefined Behavior.
See UNDEFINED_BEHAVIOR.md for required operator action.

---------------------------------------------------------------------

## 10. Interaction With Other Doctrines

- SAFE_POINT_ATOMICITY.md
- SAFE_POINT_ROLLBACK_RULE.md
- STATE_REENTRY_PROTOCOL.md
- CONTEXT_RECONSTRUCTION_INVARIANT.md
- FRY_THE_PATIENT_MAPPING.md
- UNDEFINED_BEHAVIOR.md
- UOW_BOUNDARIES_DOCTRINE.md

---------------------------------------------------------------------

## 11. Test Requirements

Test cases must include:

- attempted pause inside a UOW
- attempted re entry inside a UOW
- editor reloads inside a UOW
- clipboard changes inside a UOW
- partial anomaly classifications
- partial doctrine updates
- partial test matrix entries
- partial refactors
- partial paste events
- UOWs requiring explicit rollback
- UOWs requiring no rollback
- OS install style mid operation interruption
- attempts to enter a UOW mid stream
- interrupts caused by legitimate real life events

All must fail in a clear and obvious manner.

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/ops/UOW_DOCTRINE.md\>
