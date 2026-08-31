export type Options = { limit?: number };

export function core957D(values: string[], options: Options = {}): string[] {
  const limit = options.limit ?? values.length;
  return values.map((v) => v.trim()).filter(Boolean).slice(0, limit);
}
