// build.js
// Deterministic build script for PasteShield (Internal Only)
// <C:/dev/repos/paste-shield/build.js>

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

// End of Document <build.js>
