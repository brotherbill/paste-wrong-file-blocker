// tsconfig.js
// JS mirror of tsconfig.ts for Node build scripts (Internal Only)
// Start of Document \<C:/dev/repos/paste-wrong-file-blocker/tsconfig.js\>

exports.tsconfig = {
    compilerOptions: {
        module: "commonjs",
        target: "es2020",
        outDir: "out",
        rootDir: "src",
        strict: true,
        sourceMap: true,
        noImplicitAny: true,
        esModuleInterop: true,
        skipLibCheck: true,
        "types": ["node", "vscode", "mocha"]
    },
    include: ["src"]
};

// End of Document \<C:/dev/repos/paste-wrong-file-blocker/tsconfig.js\>
