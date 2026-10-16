import { defineConfig } from 'tsdown';

export default defineConfig({
	entry: 'src/index.ts',
	format: {
		cjs: { outDir: 'lib' },
		esm: { outDir: 'esm' },
	},
	platform: 'browser',
	target: ['node20', 'baseline-widely-available'],
	define: {
		__DEV__: 'process.env.NODE_ENV !== "production"',
	},
	dts: true,
	sourcemap: true,
	// Keep the `.js` and `.d.ts` paths that `main`, `module`, and `types` point to
	outExtensions: () => ({ js: '.js', dts: '.d.ts' }),
});
