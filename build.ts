// Start of Document \</C/dev/repos/paste-wrong-file-blocker/build.ts\>
// Deterministic build script for Paste Wrong File Blocker (Internal Only)

import { execSync } from "child_process";
import { tsconfig } from "./tsconfig";
import { writeFileSync } from "fs";

// Emit tsconfig.json deterministically
writeFileSync(
    "tsconfig.json",
    JSON.stringify(tsconfig, null, 2),
    { encoding: "utf8" }
);

// Run TypeScript compiler
execSync("npx tsc -p ./", { stdio: "inherit" });

// End of Document \</C/dev/repos/paste-wrong-file-blocker/build.ts\>
