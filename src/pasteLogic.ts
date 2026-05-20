// Start of Document \<C:/dev/repos/paste-shield/src/pasteLogic.ts\>

import * as vscode from "vscode";
import { validateWrapperCount } from "./validator";
import { Messages } from "./messages";
import { state } from "./state";
import { log } from "./logger";

export async function executePasteWithValidation(): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  const clipboardText = await vscode.env.clipboard.readText();
  const isValid = validateWrapperCount(clipboardText);

  if (!isValid) {
    state.lastPasteWasBlocked = true;
    log("Blocked unsafe paste");
    vscode.window.showErrorMessage(Messages.PasteBlocked);
    return;
  }

  state.lastPasteWasBlocked = false;
  log("Paste allowed");

  editor.edit(editBuilder => {
    for (const selection of editor.selections) {
      editBuilder.replace(selection, clipboardText);
    }
  });
}

// End of Document \<C:/dev/repos/paste-shield/src/pasteLogic.ts\>
