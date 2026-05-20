###### Start of Document </C/dev/repos/paste-wrong-file-blocker/ops/OPERATOR_VIGILANCE_PRESERVATION_RULE.md>
# OPERATOR_VIGILANCE_PRESERVATION_RULE.md
### Purpose
Defines the principle that governs operator attention, ensuring vigilance is preserved throughout all Paste Wrong File Blocker operations, testing, and monitoring.
Prevents passive trust, inattentiveness, and drift.

---------------------------------------------------------------------

## 0. Rationale

Operator vigilance is a critical safety invariant.
Systems that appear flawless cause operators to down‑regulate attention, increasing the risk of undetected anomalies.
A controlled level of visible imperfection maintains operator engagement and prevents complacency.

---------------------------------------------------------------------

## 1. Core Principle

**The operator must remain the primary source of system oversight.**
Paste Wrong File Blocker and its supporting tools must not create conditions that cause the operator to disengage, assume correctness, or reduce scrutiny.

---------------------------------------------------------------------

## 2. Vigilance Preservation Requirements

- Systems must exhibit detectable, bounded imperfections
- No subsystem may behave with silent failure modes
- No subsystem may present a false sense of infallibility
- Operator must perform regular cross‑checks
- Operator must validate assumptions explicitly
- Operator must maintain awareness of drift
- Operator must remain engaged in anomaly classification
- Operator must remain responsible for final decisions

---------------------------------------------------------------------

## 3. Acceptable Imperfection Profile

Imperfections must be:

- Visible
- Bounded
- Non‑catastrophic
- Non‑silent
- Non‑misleading
- Detectable by an attentive operator

Imperfections must **never**:

- Corrupt data
- Hide anomalies
- Misrepresent system state
- Produce silent regressions
- Undermine doctrine

---------------------------------------------------------------------

## 4. Operator Responsibilities

- Maintain continuous awareness
- Perform sanity checks
- Validate system outputs
- Detect drift early
- Classify anomalies accurately
- Update doctrine when NEW cases arise
- Preserve the integrity of the operational workflow

---------------------------------------------------------------------

## 5. System Responsibilities

- Surface anomalies clearly
- Avoid silent failure
- Avoid misleading success states
- Maintain predictable behavior
- Preserve invariants
- Provide sufficient friction to maintain operator attention

---------------------------------------------------------------------

## 6. Why Operator Vigilance Is Not the Same as Power‑User Skills

Most AI “power‑user” guides teach efficiency and shortcuts. They assume the tool is safe, stable, and trustworthy by default. Operator doctrine assumes the opposite: the system can drift, anomalies can occur, and the operator is responsible for detecting and correcting them.

Power‑user behavior removes friction. Operator behavior adds friction intentionally, because friction is a control surface. Separate windows, cold terminals, manual review, explicit steps, and no auto‑run are not inefficiencies — they are safeguards.

Power‑user guides assume the user is a consumer. Operator doctrine assumes the user is the supervisor. The operator validates outputs, performs sanity checks, detects drift early, classifies anomalies accurately, and updates doctrine when new cases arise.

This level of vigilance is closer to aviation than to consumer software. The difference is that software operations are recoverable: errors can be corrected, drift can be reversed, and the operator can pause and reset. Aviation offers no such forgiveness. This doctrine exists because the operator must remain in control at all times.

---------------------------------------------------------------------

## 7. Enforcement

This rule applies to:

- All ops/ files
- All doctrine files
- All test matrices
- All monitoring procedures
- All release and rollback workflows

No component is exempt.

---------------------------------------------------------------------

###### End of Document </C/dev/repos/paste-wrong-file-blocker/ops/OPERATOR_VIGILANCE_PRESERVATION_RULE.md>
