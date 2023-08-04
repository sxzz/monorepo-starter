import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src'],
  format: ['cjs', 'esm'],
  target: 'node16.14',
  cjsInterop: true,
  clean: true,
  dts: true,
})
