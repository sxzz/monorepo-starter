import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src'],
  format: ['cjs', 'esm'],
  target: 'node18.12',
  cjsInterop: true,
  clean: true,
  dts: true,
})
