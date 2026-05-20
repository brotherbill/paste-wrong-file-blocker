###### Start of Document \<C:/dev/repos/paste-shield/ops/OPERATOR_INTERRUPT_RECOVERY.md>
# OPERATOR_INTERRUPT_RECOVERY.md
### Purpose  
Defines the mandatory procedure for recovering operator state after any interruption.  
Ensures continuity, prevents drift, and restores alignment with doctrine.

---------------------------------------------------------------------

## 0. Rationale

Interruptions are unavoidable.  
They break rhythm, disrupt vigilance, and create cognitive gaps.

Without a formal recovery procedure, interruptions lead to:

- missed anomalies  
- incorrect classifications  
- skipped steps  
- silent drift  
- loss of operational context  

Recovery must be explicit, structured, and deterministic.

---------------------------------------------------------------------

## 1. Definition of Interruption

An interruption is any event that breaks operator flow, including:

- external distractions  
- task switching  
- unexpected alerts  
- environmental disruptions  
- fatigue breaks  
- system restarts  
- editor reloads  
- context loss  

If the operator’s attention leaves the workflow, an interruption has occurred.

---------------------------------------------------------------------

## 2. Immediate Post‑Interruption Actions

Upon returning:

1. Stop all editing  
2. Do not resume where you left off  
3. Re‑establish operational context  
4. Re‑read the current doctrine section  
5. Re‑read the current soak log entry  
6. Re‑read the last anomaly classification  
7. Confirm editor state  
8. Confirm clipboard state  
9. Confirm file state  

Only after all nine steps may work resume.

---------------------------------------------------------------------

## 3. Context Reconstruction Checklist

Operator must reconstruct:

- What was being done  
- Why it was being done  
- What the next step was  
- What the last confirmed invariant was  
- Whether any anomalies were pending  
- Whether any doctrine updates were pending  
- Whether any test matrix updates were pending  

If any item is unclear, operator must re‑establish clarity before continuing.

---------------------------------------------------------------------

## 4. Drift Prevention After Interruption

To prevent drift:

- Perform a micro‑review of the last 5 minutes of work  
- Re‑validate assumptions  
- Re‑validate editor behavior  
- Re‑validate PasteShield activation  
- Re‑validate range normalization behavior  
- Re‑validate clipboard integrity  

Interruptions create blind spots.  
Blind spots must be eliminated before resuming.

---------------------------------------------------------------------

## 5. High‑Risk Interruption Scenarios

Extra caution is required when interruptions occur during:

- anomaly classification  
- doctrine updates  
- test matrix updates  
- multi‑cursor operations  
- refactor operations  
- cross‑file edits  
- range normalization events  
- paste events  

These scenarios require a full re‑read of the surrounding context.

---------------------------------------------------------------------

## 6. Operator Responsibilities

Operator must:

- Treat every interruption as a safety event  
- Perform full recovery before resuming  
- Avoid assumptions about prior state  
- Avoid “I think I was doing…” reasoning  
- Restore vigilance before continuing  

---------------------------------------------------------------------

## 7. System Responsibilities

System must:

- Preserve visible state  
- Avoid silent resets  
- Avoid hidden context loss  
- Surface any editor reloads  
- Surface any extension reloads  
- Preserve clipboard integrity  

---------------------------------------------------------------------

## 8. Enforcement

This rule applies to:

- All soak logs  
- All anomaly classifications  
- All doctrine updates  
- All test matrix updates  
- All release and rollback workflows  
- All monitoring procedures  

No component is exempt.

---------------------------------------------------------------------

###### End of Document \<C:/dev/repos/paste-shield/ops/OPERATOR_INTERRUPT_RECOVERY.md>
