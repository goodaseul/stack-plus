// api/types/errors.ts
export interface DuplicateWordError {
  code: "DUPLICATE_WORD";
  wordId: number;
  expression: string;
}

export function isDuplicateWordError(
  error: unknown
): error is DuplicateWordError {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "DUPLICATE_WORD"
  );
}
