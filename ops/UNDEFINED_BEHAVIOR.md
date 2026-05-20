###### Start of Document </C/dev/repos/paste-wrong-file-blocker/ops/UNDEFINED_BEHAVIOR.md>
# UNDEFINED_BEHAVIOR.md
### Purpose
Defines Undefined Behavior (UB) at the operator level.
Establishes UB as a system wide failure state that cannot be recovered from without restoring a known good external safe point.
Ensures that operators understand the conditions that produce UB and the required actions when UB occurs.

---------------------------------------------------------------------

## 0. Definition

Undefined Behavior is any operator action that violates required invariants in a way that prevents the system from guaranteeing correctness, safety, or recoverability.

UB is not an error.
UB is not a warning.
UB is not a recoverable condition.

UB is failure.

Once UB has occurred, the system is no longer in a defined state.
Rollback is not guaranteed to work.
Reconstruction is not guaranteed to work.
State cannot be trusted.

---------------------------------------------------------------------

## 1. Causes of UB

UB occurs when any of the following conditions are met:

- entering a UOW anywhere other than its defined top
- leaving a UOW early, outside of its defined exit
- jumping around inside a UOW
- skipping required steps inside a UOW
- attempting rollback without a real external safe point
- attempting re entry into a UOW mid stream
- modifying persistent state without a UOW
- partial doctrine updates
- partial anomaly classifications
- partial test matrix entries
- editor reloads during a mutating UOW
- clipboard changes during a mutating UOW
- workspace trust changes during a mutating UOW
- extension reloads during a mutating UOW
- any operator action that breaks invariants required for safety

Any one of these conditions is sufficient to produce UB.

---------------------------------------------------------------------

## 2. External Safe Points

A safe point is valid only if:

- it was saved to an external archive such as GitHub or Dropbox
- it is complete
- it is restorable
- it is verifiable
- it is atomic
- it is external to the operator’s memory or editor state

If a safe point does not meet all of these criteria, it is not a safe point.

If no valid external safe point exists, UB cannot be recovered from.

---------------------------------------------------------------------

## 3. Consequences of UB

Once UB has occurred:

- rollback is not guaranteed to work
- invariants are not guaranteed to hold
- state cannot be trusted
- reconstruction cannot be trusted
- the UOW is invalid
- the system is in failure

The operator must not continue.

---------------------------------------------------------------------

## 4. Required Operator Action

When UB occurs, the operator must:

1. Stop immediately.
2. Abandon the current UOW.
3. Restore the last confirmed external safe point.
4. If no external safe point exists, rebuild the environment from first principles.
5. Begin the UOW again from its top.

There are no exceptions.

---------------------------------------------------------------------

## 5. UB in UOWs

UB in UOWs includes:

- entering mid stream
- leaving early
- skipping steps
- jumping around
- attempting recovery without a real safe point

These are the most common UB sources in operator workflows.

---------------------------------------------------------------------

## 6. UB Test Requirements

Test cases must include:

- entering a UOW mid stream
- leaving a UOW early
- skipping required steps
- attempting rollback without a real safe point
- partial doctrine updates
- partial anomaly classifications
- partial test matrix entries
- editor reloads during a mutating UOW
- clipboard changes during a mutating UOW
- workspace trust changes during a mutating UOW
- extension reloads during a mutating UOW

All must fail in a clear and obvious manner.

---------------------------------------------------------------------

###### End of Document </C/dev/repos/paste-wrong-file-blocker/ops/UNDEFINED_BEHAVIOR.md>
