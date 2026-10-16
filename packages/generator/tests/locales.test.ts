import { toAnnotationKey } from '../src/helpers/toAnnotationKey';
import { loadLocaleChain } from '../src/loaders/loadLocaleChain';

jest.mock('../src/loaders/fetchAndCache', () => ({
	importJsonModule: (name: string) => Promise.resolve(require(name)),
}));

describe('loadLocaleChain()', () => {
	it('follows explicit parent locales before truncation', async () => {
		await expect(loadLocaleChain('en-gb')).resolves.toEqual(['en-GB', 'en-001', 'en']);
		await expect(loadLocaleChain('es-mx')).resolves.toEqual(['es-MX', 'es-419', 'es']);
		await expect(loadLocaleChain('nb')).resolves.toEqual(['nb', 'no']);
	});

	it('does not inherit across scripts', async () => {
		await expect(loadLocaleChain('zh-hant')).resolves.toEqual(['zh-Hant']);
	});

	it('leaves out root', async () => {
		await expect(loadLocaleChain('en')).resolves.toEqual(['en']);
	});
});

describe('toAnnotationKey()', () => {
	it('removes variation selectors but keeps zero width joiners', () => {
		expect(toAnnotationKey('1F3F3-FE0F-200D-1F308')).toBe('1F3F3-200D-1F308');
		expect(toAnnotationKey('263A-FE0E')).toBe('263A');
	});
});
