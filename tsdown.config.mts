import { defineConfig } from 'tsdown';

export default defineConfig({
	workspace: ['packages/core', 'packages/generator', 'packages/test-utils'],
});
