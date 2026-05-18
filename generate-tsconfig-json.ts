// Start of Document \<C:/dev/repos/paste-wrong-file-blocker/generate-tsconfig-json.ts\>
// Deterministic emitter for tsconfig.json using typed source-of-truth.

import { writeFileSync } from "fs";
import { tsconfig } from "./tsconfig";

writeFileSync(
    "tsconfig.json",
    JSON.stringify(tsconfig, null, 2),
    { encoding: "utf8" }
);

// End of Document \<C:/dev/repos/paste-wrong-file-blocker/generate-tsconfig-json.ts\>
