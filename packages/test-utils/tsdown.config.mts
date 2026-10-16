import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: 'src/index.ts',
	format: 'cjs',
	outDir: 'lib',
	platform: 'node',
	dts: true,
	sourcemap: true,
	fixedExtension: false,
	deps: {
		// Test datasets are required at runtime from the package root
		neverBundle: [/\.json$/],
	},
});
