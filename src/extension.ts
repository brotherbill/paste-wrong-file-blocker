// extension.ts
// PasteShield (Internal Only)
// Deterministic paste interceptor with Safe‑Pass header/footer validation.
// <C:/dev/repos/paste-shield/src/extension.ts>

import * as vscode from "vscode";

function extractHeader(line: string): string | null {
    const match = line.match(/^###### <(.+)>/);
    return match ? match[1].trim() : null;
}

function extractFooter(line: string): string | null {
    const match = line.match(/^###### End of Document <(.+)>/);
    return match ? match[1].trim() : null;
}

function findFooter(lines: string[]): string | null {
    let i = lines.length - 1;

    // Skip trailing whitespace-only lines (including final newline)
    while (i >= 0 && lines[i].trim() === '') {
        i--;
    }

    // Skip compiler-generated sourcemap lines
    while (i >= 0 && lines[i].trim().startsWith('//# sourceMappingURL=')) {
        i--;
    }

    // If next line upward is empty → semantic boundary → no footer
    if (i >= 0 && lines[i].trim() === '') {
        return null;
    }

    // Attempt to extract footer from this semantic line
    return extractFooter(lines[i] ?? '');
}

function isMarkdownFile(editor: vscode.TextEditor): boolean {
    const fileName = editor.document.fileName.toLowerCase();
    return fileName.endsWith('.md');
}

function isSafePass(fullText: string, clipboardText: string): boolean {
    const fileLines = fullText.split(/\r?\n/);
    const clipLines = clipboardText.split(/\r?\n/);

    const fileHeader = extractHeader(fileLines[2] ?? '');
    const clipHeader = extractHeader(clipLines[2] ?? '');

    const fileFooter = findFooter(fileLines);
    const clipFooter = findFooter(clipLines);

    if (!fileHeader || !fileFooter || !clipHeader || !clipFooter) {
        return false;
    }

    return fileHeader === clipHeader && fileFooter === clipFooter;
}

async function getClipboardText(): Promise<string> {
    return vscode.env.clipboard.readText();
}

function isFullDocumentReplacement(editor: vscode.TextEditor, clipboardText: string): boolean {
    const doc = editor.document;
    const fullRange = new vscode.Range(doc.positionAt(0), doc.positionAt(doc.getText().length));
    const selections = editor.selections;

    if (selections.length !== 1) {
        return false;
    }

    const sel = selections[0];
    const isFullRange = sel.start.isEqual(fullRange.start) && sel.end.isEqual(fullRange.end);

    if (!isFullRange) {
        return false;
    }

    return clipboardText.length > 0;
}

async function handlePaste(editor: vscode.TextEditor) {
    const clipboardText = await getClipboardText();
    const docText = editor.document.getText();

    // Non-full replacements always allowed
    if (!isFullDocumentReplacement(editor, clipboardText)) {
        await vscode.commands.executeCommand('editor.action.clipboardPasteAction');
        return;
    }

    // Markdown-only Safe-Pass
    if (isMarkdownFile(editor)) {
        if (isSafePass(docText, clipboardText)) {
            await vscode.commands.executeCommand('editor.action.clipboardPasteAction');
            return;
        }
    }

    // Unsafe full replacement → nanny
    const overridePrompt =
        "PasteShield Override Required.\n" +
        "PasteShield: Full-document replacement detected.\n" +
        "To override, type the exact string: confirmPasteOverride";

    const input = await vscode.window.showInputBox({
        prompt: overridePrompt,
        placeHolder: 'confirmPasteOverride',
        ignoreFocusOut: true,
        value: ''
    });

    if (input === 'confirmPasteOverride') {
        await vscode.commands.executeCommand('editor.action.clipboardPasteAction');
    }
}

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('pasteShieldInternal.paste', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        await handlePaste(editor);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }

// End of Document <extension.ts>
