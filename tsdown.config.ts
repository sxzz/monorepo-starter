import { defineConfig } from 'tsdown'

export default defineConfig({
  workspace: true,
  entry: ['src/index.ts'],
  exports: true,
  dts: true,
  publint: true,
})
