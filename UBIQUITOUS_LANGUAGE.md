###### Start of Document \<C:/dev/repos/paste-wrong-file-blocker/docs/UBIQUITOUS_LANGUAGE.md\>
# Ubiquitous Language

This document defines the canonical terms used throughout the paste‑shield system.  
All terms are frozen doctrine and must be used consistently.

---------------------------------------------------------------------

## A

### ACCEPT (OBSERVABLE)
The final validator outcome indicating that the paste operation is permitted.  
Computed as the logical AND of:
- does_dest_file_support_pasting_with_identity  
- does_paste_buffer_support_pasting_with_identity  

---------------------------------------------------------------------

## C

### CLAIMED IDENTITY
A self‑reported identity contained in a header and/or footer.  
Each claimed identity asserts:
- a claimed absolute path  
- a claimed filename  
A single header may contain multiple claimed identities.  
A single footer may contain multiple claimed identities.  
A file (destination or paste buffer) may contain multiple headers and/or multiple footers, each with zero or more claimed identities.  
All claimed identities are untrusted.  
Claimed identities may contradict each other:
- across sides (dest vs buffer)  
- within a single side  
- within a single header  
- within a single footer  
All claimed identities must be validated against the destination file’s identity.  
Claimed identity is never authoritative.

---------------------------------------------------------------------

## D

### DESTINATION FILE
The file into which the paste operation is being attempted.

### DESTINATION FILE IDENTITY CLAIM
Any claimed identity appearing in the destination file’s headers and/or footers.  
A destination file may contain:
- a header only  
- a footer only  
- both header and footer  
- multiple headers  
- multiple footers  
Each header/footer may contain multiple claimed identities.  
All such claims are untrusted and may be contradictory.  
If the destination file is unmarked, it contains no identity claim.

---------------------------------------------------------------------

## F

### FOOTER
A **multi‑line block** at the bottom of a destination file or paste buffer.  
A footer may be a **single line**, but typically contains **several lines**.  
A file may contain multiple footers.  
A footer may contain:
- zero or more **Marked Lines**  
- zero or more claimed identities  
Footers are untrusted and may contradict each other.

---------------------------------------------------------------------

## H

### HEADER
A **multi‑line block** at the top of a destination file or paste buffer.  
A header may be a **single line**, but typically contains **several lines**.  
A header ends with a delimiter of `\n` or `\r\n`.  
A file may contain multiple headers.  
A header may contain:
- zero or more **Marked Lines**  
- zero or more claimed identities  
Headers are untrusted and may contradict each other.

---------------------------------------------------------------------

## I

### IDENTITY
The authoritative identity of the destination file, consisting of:
- absolute path (provided by VS Code)  
- filename (provided by VS Code)  
Identity is never derived from content.  
Identity belongs only to the destination file.  
The paste buffer never has identity — only identity claims.

### IDENTITY CLAIM
A self‑reported identity contained in a header and/or footer.  
Each identity claim asserts:
- a claimed absolute path  
- a claimed filename  
Identity claims are untrusted.  
Identity claims may appear in:
- the paste buffer (if marked)  
- the destination file (if marked)  
Identity claims may contradict each other across sides.  
Identity claims may contradict each other within a single side.  
Identity claims may contradict each other within a single header or footer.  
Identity claims must always be validated against the destination file’s identity.

---------------------------------------------------------------------

## M

### MARKED LINE
A line within a header or footer that contains one or more identity claims.  
A header or footer may contain multiple Marked Lines.  
Marked Lines are untrusted and may contradict each other.

---------------------------------------------------------------------

## P

### PASTE BUFFER
The text being pasted.  
The paste buffer has no authoritative identity and may not originate from a file.  
If unmarked, it contains no identity claim.  
If marked, it may contain:
- a header only  
- a footer only  
- both header and footer  
- multiple headers  
- multiple footers  
Each header/footer may contain multiple claimed identities, which may be contradictory.

### PASTE BUFFER IDENTITY CLAIM
Any claimed identity appearing in the paste buffer’s headers and/or footers.  
This is not real identity.  
If the paste buffer is unmarked, it contains no identity claim.  
If marked, it may contain multiple, contradictory identity claims.

---------------------------------------------------------------------

## R

### REJECT (OBSERVABLE)
The final validator result when either:
- does_dest_file_support_pasting_with_identity == false  
- does_paste_buffer_support_pasting_with_identity == false

---------------------------------------------------------------------

## S

### SUPPORTS PASTING WITH IDENTITY (DESTINATION)
Boolean evaluation:
**does_dest_file_support_pasting_with_identity**  
Determines whether the destination file, with its identity and any identity claims, permits the paste.

### SUPPORTS PASTING WITH IDENTITY (PASTE BUFFER)
Boolean evaluation:
**does_paste_buffer_support_pasting_with_identity**  
Determines whether the paste buffer, with its identity claims (if any), permits the paste.

---------------------------------------------------------------------

## U

### UNMARKED DESTINATION FILE
A destination file that contains no header or footer with identity claims.  
It still has identity (path + filename), but contains no identity claim.

---------------------------------------------------------------------

###### End of Document \<C:/dev/repos/paste-wrong-file-blocker/docs/UBIQUITOUS_LANGUAGE.md\>
