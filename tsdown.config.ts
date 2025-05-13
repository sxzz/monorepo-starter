import { defineConfig } from 'tsdown'

export default defineConfig({
  workspace: true,
  format: ['esm'],
  entry: ['src/index.ts'],
})
