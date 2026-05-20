###### Start of Document \</C/dev/repos/paste-wrong-file-blocker/TRUST_MODEL.md\>
# Trust Model
### Purpose: Defines what information is trusted, untrusted, and forbidden for identity validation.

---------------------------------------------------------------------

## 1. Overview

The trust model establishes which components of the system may be relied upon as authoritative.  
All trust decisions are deterministic and aligned with Identity Envelope Doctrine v1.0.

---------------------------------------------------------------------

## 2. Trusted Elements

### 2.1 Destination File Path
The absolute path of the destination file, as provided by the editor.  
This value is externally asserted and cannot be modified by the paste buffer or file contents.

### 2.2 Destination File Name
The filename of the destination file, as provided by the editor.  
This value is externally asserted and cannot be modified by the paste buffer or file contents.

These two fields form the **trusted identity** of the destination file.

---------------------------------------------------------------------

## 3. Untrusted Elements

### 3.1 Destination File Content
No part of the destination file’s content is trusted.  
This includes:

- headers  
- footers  
- comments  
- whitespace  
- syntax  
- structure  
- any embedded identity envelope  

Content is mutable and therefore untrusted.

### 3.2 Paste Buffer Content
All content in the paste buffer is untrusted.  
This includes:

- header  
- footer  
- envelope  
- comments  
- whitespace  
- syntax  

The paste buffer is self‑reported identity and cannot be trusted.

---------------------------------------------------------------------

## 4. Forbidden Trust Sources

The validator must not trust:

- user configuration  
- workspace configuration  
- global state  
- cached state  
- inferred identity  
- historical identity  
- previously pasted identity  
- any content‑derived identity  

Only the editor‑provided path and filename may be trusted.

---------------------------------------------------------------------

## 5. Trust Invariants

1. The destination file identity consists **only** of the absolute path and filename.  
2. No part of the destination file’s content contributes to identity.  
3. The paste buffer identity is always untrusted.  
4. Identity comparison is performed only between:  
   - trusted destination path+filename  
   - untrusted paste buffer header+footer  
5. No other trust sources are permitted.  
6. Trust rules cannot be overridden or configured.

---------------------------------------------------------------------

## 6. Rationale

- Editor‑provided identity is externally asserted and immutable.  
- Content‑based identity is self‑reported and mutable.  
- Self‑reported identity cannot be trusted.  
- Deterministic validation requires a single, authoritative identity source.  
- This model prevents spoofing, drift, and nondeterministic behavior.

---------------------------------------------------------------------

###### End of Document \</C/dev/repos/paste-wrong-file-blocker/TRUST_MODEL.md\>
