import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: 'src/index.ts',
	format: 'esm',
	outDir: 'mjs',
	platform: 'node',
	dts: true,
	sourcemap: true,
});
