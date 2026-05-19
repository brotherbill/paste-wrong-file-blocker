// Start of Document <C:/dev/repos/paste-shield/src/extension.ts>

import * as vscode from "vscode";
import { validateHeaderFooter, ValidationResult } from "./validation";

async function performValidatedPaste(): Promise<void> {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    const clipboardText = await vscode.env.clipboard.readText();
    if (!clipboardText || clipboardText.length === 0) {
        await vscode.window.showErrorMessage(
            "Paste blocked: Clipboard is empty.",
            { modal: true }
        );
        return;
    }

    const validation: ValidationResult = validateHeaderFooter(clipboardText);

    if (!validation.ok) {
        const code = validation.code ?? "UNKNOWN";
        const reason = validation.reason ?? "Unspecified validation failure";

        await vscode.window.showErrorMessage(
            `Paste blocked (${code}): ${reason}`,
            { modal: true }
        );

        return;
    }

    await vscode.commands.executeCommand("editor.action.clipboardPasteAction");
}

export function activate(context: vscode.ExtensionContext): void {
    const disposable = vscode.commands.registerCommand(
        "pasteShield.pasteWithValidation",
        async () => {
            await performValidatedPaste();
        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate(): void {
    // No-op: included for completeness and future extension.
}

// End of Document <C:/dev/repos/paste-shield/src/extension.ts>
