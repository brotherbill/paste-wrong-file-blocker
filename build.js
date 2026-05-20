// Start of Document \</C/dev/repos/paste-wrong-file-blocker/build.js\>
// Deterministic build script for Paste Wrong File Blocker (Internal Only)

const { execSync } = require("child_process");
const { writeFileSync } = require("fs");
const { tsconfig } = require("./tsconfig");

// Emit tsconfig.json deterministically
writeFileSync(
  "tsconfig.json",
  JSON.stringify(tsconfig, null, 2),
  { encoding: "utf8" }
);

// Run TypeScript compiler
execSync("npx tsc -p ./", { stdio: "inherit" });

// End of Document \</C/dev/repos/paste-wrong-file-blocker/build.js\>
