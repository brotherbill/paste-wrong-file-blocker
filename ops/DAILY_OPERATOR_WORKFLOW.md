###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/ops/DAILY_OPERATOR_WORKFLOW.md\>
# DAILY_OPERATOR_WORKFLOW.md
### Purpose  
Defines the mandatory daily operator workflow for the 30‑day Paste Wrong File Blocker soak.  
Ensures consistent, reproducible, deterministic data collection.

---------------------------------------------------------------------

## 0. Preconditions

- Paste Wrong File Blocker installed and enabled  
- Workspace Trust: Trusted  
- Autosave state recorded  
- Editor version recorded  
- No pending OS restarts  
- No PATH modifications planned for the day  
- No extension installs or removals during the session  

---------------------------------------------------------------------

## 1. Daily Startup Sequence

1. Launch VS Code  
2. Open the primary working folder  
3. Verify Paste Wrong File Blocker activation  
4. Open the 30‑day soak log  
5. Create today’s entry using the daily template  
6. Record operator context (fatigue, workload, mode)  
7. Begin normal work  

No edits occur before the log entry is created.

---------------------------------------------------------------------

## 2. Paste Event Recording Rules

For every paste event:

- If Paste Wrong File Blocker blocks → record as “guarded”  
- If Paste Wrong File Blocker allows → record as “unguarded”  
- If behavior is unexpected → classify as anomaly  
- If anomaly does not fit A/B/C → mark as NEW  

Operator must not interpret intent.  
Operator records literal behavior only.

---------------------------------------------------------------------

## 3. Anomaly Handling

### 3.0 Immediate Actions  
- Stop editing  
- Capture the exact paste context  
- Capture the editor state  
- Capture the clipboard content  
- Capture the range VS Code attempted to mutate  

### 3.1 Classification  
- A‑series: full‑document replacement attempts  
- B‑series: identity mismatches  
- C‑series: range normalization anomalies  
- NEW: requires doctrine creation before continuing  

### 3.2 Post‑Anomaly  
- Update soak log  
- Update doctrine if NEW  
- Update test matrix  
- Resume work  

---------------------------------------------------------------------

## 4. Daily Shutdown Sequence

1. Finalize today’s soak log entry  
2. Summarize anomalies (if any)  
3. Note any operator‑visible drift  
4. Close all files  
5. Exit VS Code  
6. Do not modify logs after shutdown  

---------------------------------------------------------------------

## 5. End‑of‑Day Postconditions

- Log entry complete  
- All anomalies classified  
- No missing data  
- No retroactive edits  
- Doctrine updated if required  
- Test matrix updated if required  

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/ops/DAILY_OPERATOR_WORKFLOW.md\>
