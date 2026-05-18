# Unmarked Destination Rule
### Purpose: Defines the doctrine governing paste behavior when the destination file has no identity envelope.
###### <C:/dev/repos/paste-shield/docs/UNMARKED_DESTINATION_RULE.md>

---------------------------------------------------------------------

## 1. Definition

An **unmarked destination file** is a destination file that contains:

- no header  
- no footer  
- no identity envelope of any kind  

The file does not declare its identity.

---------------------------------------------------------------------

## 2. Doctrine

### 2.1 Destination Identity Doctrine

If the destination file is unmarked:

- Identity comparison against the destination file is skipped.
- **If the paste buffer is marked, its header and footer are still validated for structural correctness, but they are NOT compared to any destination identity.**
- **If the paste buffer is unmarked, it may be pasted (subject to other safety rules).**

### 2.2 Structural Safety Doctrine

Even when the destination file is unmarked:

- **Malformed identity envelopes in the paste buffer must still be rejected.**

This includes:

- multiple headers  
- multiple footers  
- mismatched header/footer  
- invalid header format  
- invalid footer format  
- corrupted envelope  
- partial envelope  
- any structurally invalid identity markers  

### 2.3 Acceptance Doctrine

A paste into an unmarked destination file is accepted **only if**:

- the paste buffer is unmarked, **or**
- the paste buffer is marked with a **structurally valid** identity envelope

A paste is rejected if:

- the paste buffer contains a malformed envelope  
- the paste buffer contains contradictory identity markers  

---------------------------------------------------------------------

## 3. Rationale

1. Unmarked destination files have no identity to compare against.  
2. Structural safety is still required to prevent malformed or dangerous envelopes.  
3. Allowing malformed envelopes would introduce nondeterminism and unsafe behavior.  
4. The operator must be protected from corrupted or spoofed identity markers.  
5. This rule preserves safety without restricting legitimate workflows.

---------------------------------------------------------------------

## 4. Implementation Requirements

The validator must:

1. Detect whether the destination file is marked.  
2. If unmarked → skip identity comparison.  
3. Regardless of destination marking → validate envelope structure.  
4. If paste buffer envelope is malformed → **REJECT**.  
5. If paste buffer envelope is valid → **ACCEPT**.  
6. If paste buffer is unmarked → **ACCEPT**.

This is Step 0 and Step 1 of the canonical algorithm.

---------------------------------------------------------------------

## 5. Invariants

- Destination identity comparison is skipped only when destination is unmarked.  
- Structural envelope validation is **never** skipped.  
- Malformed envelopes are always rejected.  
- JSON exemption does not override structural safety.  
- No configuration may disable this rule.  
- No language rule may bypass this rule.

---------------------------------------------------------------------

###### End of Document <UNMARKED_DESTINATION_RULE.md>
