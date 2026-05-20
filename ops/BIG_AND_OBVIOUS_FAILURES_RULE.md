###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/ops/BIG_AND_OBVIOUS_FAILURES_RULE.md\>
# BIG_AND_OBVIOUS_FAILURES_RULE.md
### Purpose  
Defines the requirement that all system failures must be large, visible, and unmistakable.  
Prevents silent failure, ambiguous behavior, and operator complacency.

---------------------------------------------------------------------

## 0. Rationale

Small failures are dangerous.  
Silent failures are lethal.  
Ambiguous failures erode operator vigilance.

Big, obvious failures preserve attention, prevent drift, and ensure anomalies are detected immediately.

---------------------------------------------------------------------

## 1. Core Principle

**All failures must be BIG and OBVIOUS.**  
A failure that cannot be ignored cannot be missed.

---------------------------------------------------------------------

## 2. Failure Visibility Requirements

Failures must be:

- Loud  
- Immediate  
- Unambiguous  
- Impossible to overlook  
- Impossible to misinterpret  
- Impossible to silently continue past  

Failures must **never**:

- Hide in logs  
- Present as partial success  
- Allow continued operation without acknowledgment  
- Require guesswork to classify  
- Blend into normal behavior  

---------------------------------------------------------------------

## 3. Operator Interaction Requirements

When a failure occurs:

- Operator must be forced to stop  
- Operator must classify the anomaly  
- Operator must capture context  
- Operator must update doctrine if NEW  
- Operator must update test matrix  
- Operator must not continue until the failure is understood  

---------------------------------------------------------------------

## 4. System Behavior Requirements

Paste Wrong File Blocker and all supporting tools must:

- Surface failures with maximum clarity  
- Block unsafe operations  
- Prevent silent regressions  
- Reject ambiguous states  
- Fail fast, not fail later  
- Fail visibly, not fail quietly  

---------------------------------------------------------------------

## 5. Acceptable Failure Patterns

Acceptable:

- Hard blocks  
- Clear error banners  
- Full‑stop conditions  
- Explicit anomaly classifications  
- Immediate operator intervention  

Unacceptable:

- Soft failures  
- Partial failures  
- Hidden failures  
- Delayed failures  
- “It seemed fine until…” failures  

---------------------------------------------------------------------

## 6. Enforcement

This rule applies to:

- All ops/ files  
- All doctrine files  
- All test matrices  
- All monitoring procedures  
- All release and rollback workflows  
- All operator workflows  
- All anomaly classifications  

No component is exempt.

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/ops/BIG_AND_OBVIOUS_FAILURES_RULE.md\>
