###### Start of Document \<C:/dev/repos/paste-shield/ops/OPERATOR_VIGILANCE_PRESERVATION_RULE.md>
# OPERATOR_VIGILANCE_PRESERVATION_RULE.md
### Purpose  
Defines the principle that governs operator attention, ensuring vigilance is preserved throughout all PasteShield operations, testing, and monitoring.  
Prevents passive trust, inattentiveness, and drift.

---------------------------------------------------------------------

## 0. Rationale

Operator vigilance is a critical safety invariant.  
Systems that appear flawless cause operators to down‑regulate attention, increasing the risk of undetected anomalies.  
A controlled level of visible imperfection maintains operator engagement and prevents complacency.

---------------------------------------------------------------------

## 1. Core Principle

**The operator must remain the primary source of system oversight.**  
PasteShield and its supporting tools must not create conditions that cause the operator to disengage, assume correctness, or reduce scrutiny.

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

## 6. Enforcement

This rule applies to:

- All ops/ files  
- All doctrine files  
- All test matrices  
- All monitoring procedures  
- All release and rollback workflows  

No component is exempt.

---------------------------------------------------------------------

###### End of Document \<C:/dev/repos/paste-shield/ops/OPERATOR_VIGILANCE_PRESERVATION_RULE.md>
