/**
 * A template tag function that interprets the template literal and
 * interpolates it in the exact same way as a plain, non-tagged
 * template literal.
 */
export default function cooked(
  strings: TemplateStringsArray,
  ...subs: any[]
): string {
  const {length} = strings;
  return strings
    .map((chunk, i) => {
      if (length <= i) {
        return chunk;
      }

      return subs[i - 1] ? subs[i - 1] + chunk : chunk;
    })
    .join('');
}
