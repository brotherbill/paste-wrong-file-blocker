// PasteShield (Internal Only)
// Deterministic paste interceptor with Safe‑Pass header/footer validation.
// <C:/dev/repos/paste-shield/src/extension.ts>

import * as vscode from 'vscode';

function extractHeader(line: string): string | null {
    const match = line.match(/^###### <(.+)>/);
    return match ? match[1].trim() : null;
}

function extractFooter(line: string): string | null {
    const match = line.match(/^###### End of Document <(.+)>/);
    return match ? match[1].trim() : null;
}

function isMarkdownFile(editor: vscode.TextEditor): boolean {
    const fileName = editor.document.fileName.toLowerCase();
    return fileName.endsWith('.md');
}

function isSafePass(fullText: string, clipboardText: string): boolean {
    const fileLines = fullText.split(/\r?\n/);
    const clipLines = clipboardText.split(/\r?\n/);

    const fileHeader = extractHeader(fileLines[2] ?? '');
    const fileFooter = extractFooter(fileLines[fileLines.length - 2] ?? '');

    const clipHeader = extractHeader(clipLines[2] ?? '');
    const clipFooter = extractFooter(clipLines[clipLines.length - 2] ?? '');

    if (!fileHeader || !fileFooter || !clipHeader || !clipFooter) {
        return false;
    }

    return fileHeader === clipHeader && fileFooter === clipFooter;
}

async function getClipboardText(): Promise<string> {
    return vscode.env.clipboard.readText();
}

function isFullDocumentReplacement(
    editor: vscode.TextEditor,
    clipboardText: string
): boolean {
    const doc = editor.document;
    const fullRange = new vscode.Range(
        doc.positionAt(0),
        doc.positionAt(doc.getText().length)
    );

    const selections = editor.selections;
    if (selections.length !== 1) {
        return false;
    }

    const sel = selections[0];
    const isFullRange =
        sel.start.isEqual(fullRange.start) && sel.end.isEqual(fullRange.end);

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
    const disposable = vscode.commands.registerCommand(
        'pasteShieldInternal.paste',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                return;
            }
            await handlePaste(editor);
        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}

// End of Document <extension.ts>
