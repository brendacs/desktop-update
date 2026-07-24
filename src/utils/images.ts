// Vite replacement for webpack's dynamic `require('../images/' + name)`.
// Pass the result of `import.meta.glob('../images/*', { eager: true, import: 'default' })`
// and get back a { 'file.png': '/resolved/url.png' } lookup keyed by basename.
export function toImageMap(
  glob: Record<string, unknown>
): Record<string, string> {
  const map: Record<string, string> = {}
  for (const path in glob) {
    const name = path.split('/').pop()
    if (name) map[name] = glob[path] as string
  }
  return map
}
