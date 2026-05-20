// Start of Document \</C/dev/repos/paste-wrong-file-blocker/src/validator.ts\>

export function validateWrapperCount(text: string): boolean {
  const startCount = (text.match(/Start of Document/g) || []).length;
  const endCount = (text.match(/End of Document/g) || []).length;
  return startCount === endCount;
}

// End of Document \</C/dev/repos/paste-wrong-file-blocker/src/validator.ts\>
