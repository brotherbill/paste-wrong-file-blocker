// extension.js
// Purpose: Deterministic paste interception and header/footer validation for PasteShield.
// ###### <C:/dev/repos/paste-shield/extension.js>

const vscode = require('vscode');

/**
 * Normalize whitespace for header/footer comparison.
 * - Trim leading/trailing whitespace
 * - Collapse internal whitespace to a single space
 */
function normalizeWhitespace(line) {
    return line.trim().replace(/\s+/g, ' ');
}

/**
 * Detect header identity line after normalization.
 * Canonical example:
 *   <C:/dev/repos/paste-shield/MY_RULES.md>
 */
function isHeaderLine(line) {
    const n = normalizeWhitespace(line);
    return /^<.+\/.+>$/.test(n);
}

/**
 * Detect footer termination line after normalization.
 * Canonical example:
 *   ###### End of Document <MY_RULES.md>
 */
function isFooterLine(line) {
    const n = normalizeWhitespace(line);
    return /^###### End of Document <.+>$/.test(n);
}

/**
 * Validate header/footer structure.
 * Rules (MY_RULES.md §11):
 * - Whitespace‑tolerant match is accepted.
 * - Extra whitespace is removed.
 * - Multiple header lines → reject.
 * - Multiple footer lines → reject.
 */
function validateHeaderFooter(pasteText) {
    const lines = pasteText.split(/\r?\n/);
    let headerCount = 0;
    let footerCount = 0;
    const normalizedLines = [];

    for (const line of lines) {
        const n = normalizeWhitespace(line);

        if (isHeaderLine(line)) {
            headerCount++;
            normalizedLines.push(n);
        } else if (isFooterLine(line)) {
            footerCount++;
            normalizedLines.push(n);
        } else {
            normalizedLines.push(line);
        }
    }

    if (headerCount > 1) {
        return {
            valid: false,
            reason: 'Multiple header lines detected. A valid document contains exactly one header.',
            normalizedLines
        };
    }

    if (footerCount > 1) {
        return {
            valid: false,
            reason: 'Multiple footer lines detected. A valid document contains exactly one footer.',
            normalizedLines
        };
    }

    return { valid: true, reason: null, normalizedLines };
}

/**
 * Determine if paste would replace the entire document.
 */
function isFullDocumentReplacement(editor, pasteText) {
    const doc = editor.document;
    const fullRange = new vscode.Range(
        doc.positionAt(0),
        doc.positionAt(doc.getText().length)
    );

    const sel = editor.selection;
    const wholeDocSelected =
        sel.start.isEqual(fullRange.start) &&
        sel.end.isEqual(fullRange.end);

    const emptyDoc = doc.getText().length === 0;

    return wholeDocSelected || emptyDoc;
}

/**
 * Show override modal.
 */
async function showFullReplacementModal(editor, reason) {
    const fileName = editor.document.fileName;

    const message = [
        'PasteShield: Full‑document replacement detected.',
        '',
        `File: ${fileName}`,
        `Reason: ${reason}`,
        '',
        'To override, type the exact string:',
        'confirmPasteOverride'
    ].join('\n');

    const input = await vscode.window.showInputBox({
        title: 'PasteShield Override Required',
        prompt: message,
        ignoreFocusOut: true,
        value: ''
    });

    if (input === 'confirmPasteOverride') {
        vscode.window.setStatusBarMessage('PasteShield: Unsafe override executed.', 5000);
        return 'override';
    }

    return 'cancel';
}

/**
 * Perform atomic paste.
 */
async function performPaste(editor, text) {
    const edit = new vscode.WorkspaceEdit();
    const doc = editor.document;
    const sel = editor.selection;

    edit.replace(doc.uri, sel, text);
    await vscode.workspace.applyEdit(edit);
}

/**
 * Main command handler.
 */
async function handlePasteShieldPaste() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const clipboardText = await vscode.env.clipboard.readText();
    if (!clipboardText) return;

    // Header/footer validation
    const validation = validateHeaderFooter(clipboardText);
    if (!validation.valid) {
        await vscode.window.showErrorMessage(
            `PasteShield blocked paste: ${validation.reason}`
        );
        return;
    }

    const normalizedText = validation.normalizedLines.join('\n');

    // Full‑document replacement detection
    if (isFullDocumentReplacement(editor, normalizedText)) {
        const decision = await showFullReplacementModal(
            editor,
            'Full‑document replacement'
        );

        if (decision !== 'override') {
            return; // Blocked: no mutation, no cursor movement, no undo entry
        }

        await performPaste(editor, normalizedText);
        return;
    }

    // Normal paste
    await performPaste(editor, normalizedText);
}

/**
 * Activation
 */
function activate(context) {
    const disposable = vscode.commands.registerCommand(
        'paste-shield.paste',
        handlePasteShieldPaste
    );
    context.subscriptions.push(disposable);
}

/**
 * Deactivation
 */
function deactivate() {
    // No background behavior
}

module.exports = { activate, deactivate };

// ###### End of Document <extension.js>
