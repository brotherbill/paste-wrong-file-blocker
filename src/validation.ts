// Start of Document \<C:/dev/repos/paste-shield/src/validation.ts\>

export interface ValidationResult {
  valid: boolean;
  code: string;
  message: string;
}

const START_MARKER = '###### Start of Document';
const END_MARKER = '###### End of Document';

function normalize(line: string): string {
  return line.trim().replace(/\s+/g, ' ');
}

export function validateHeaderFooter(text: string): ValidationResult {
  const lines = text.split(/\r?\n/);

  const startLines = lines.filter(l => normalize(l).startsWith(START_MARKER));
  const endLines = lines.filter(l => normalize(l).startsWith(END_MARKER));

  if (startLines.length !== 1) {
    return {
      valid: false,
      code: 'MULTIPLE_OR_MISSING_START',
      message: `Expected exactly one Start marker, found ${startLines.length}.`
    };
  }

  if (endLines.length !== 1) {
    return {
      valid: false,
      code: 'MULTIPLE_OR_MISSING_END',
      message: `Expected exactly one End marker, found ${endLines.length}.`
    };
  }

  return {
    valid: true,
    code: 'OK',
    message: 'Header and footer validated.'
  };
}

// End of Document \<C:/dev/repos/paste-shield/src/validation.ts\>
