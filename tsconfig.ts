// tsconfig.ts
// Typed source-of-truth configuration for PasteShield (Internal Only)
// <C:/dev/repos/paste-shield/tsconfig.ts>

export const tsconfig = {
    compilerOptions: {
        module: "commonjs",
        target: "es2020",
        outDir: "out",
        rootDir: "src",
        strict: true,
        sourceMap: true,
        noImplicitAny: true,
        esModuleInterop: true,
        skipLibCheck: true
    },
    include: ["src"]
};

// End of Document <tsconfig.ts>
