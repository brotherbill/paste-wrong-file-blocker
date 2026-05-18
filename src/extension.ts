// Start of Document \<C:/dev/repos/paste-wrong-file-blocker/src/extension.ts\>

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    //
    // Unified paste handler — all paste vectors funnel here.
    //
    const handler = async () => {
        const isSafe = await validateClipboardAgainstFile();

        if (!isSafe) {
            vscode.window.showErrorMessage("Paste blocked by Paste Wrong File Blocker.");
            return;
        }

        //
        // SAFE → perform the real paste using the built‑in implementation.
        //
        await vscode.commands.executeCommand("editor.action.clipboardPasteAction");
    };

    //
    // Register explicit Ctrl+V command.
    //
    context.subscriptions.push(
        vscode.commands.registerCommand("pasteWrongFileBlocker.paste", handler)
    );
}

//
// VALIDATION LOGIC
// Placeholder. Replace with Safe‑Pass header/footer validation.
//
async function validateClipboardAgainstFile(): Promise<boolean> {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return false;
    }

    const clipboardText = await vscode.env.clipboard.readText();
    const documentText = editor.document.getText();

    //
    // TODO: Replace with real Safe‑Pass header/footer validation.
    // Current behavior: always allow.
    //
    return true;
}

export function deactivate() {}

// End of Document \<C:/dev/repos/paste-wrong-file-blocker/src/extension.ts\>
