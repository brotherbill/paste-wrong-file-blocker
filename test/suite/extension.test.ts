// Start of Document \</C/dev/repos/paste-wrong-file-blocker/test/suite/extension.test.ts\>

import * as assert from "assert";
import * as vscode from "vscode";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("Extension activates", async () => {
    const extension = vscode.extensions.getExtension("your-name-here.paste-wrong-file-blocker");
    assert.ok(extension);
    await extension?.activate();
    assert.ok(extension.isActive);
  });
});

// End of Document \</C/dev/repos/paste-wrong-file-blocker/test/suite/extension.test.ts\>
