import { readFileSync, writeFileSync } from 'node:fs'
const file = 'src/styles/index.css'
const source = readFileSync(file, 'utf8')
let depth = 0
const lines = source.replace(/\{/g, '{\n').replace(/;/g, ';\n').replace(/\}/g, '\n}\n').split('\n')
const formatted = lines.map(line => {
  const text = line.trim()
  if (!text) return ''
  if (text.startsWith('}')) depth = Math.max(0, depth - 1)
  const output = '  '.repeat(depth) + text
  if (text.endsWith('{')) depth++
  return output
}).filter(Boolean).join('\n') + '\n'
writeFileSync(file, formatted)
