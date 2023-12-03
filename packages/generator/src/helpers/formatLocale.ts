export function formatLocale(locale: string): string {
	const [lang, region] = locale.split('-');
	let newLocale = lang;

	if (region) {
		newLocale += '_';
		newLocale +=
			region.length === 2 ? region.toUpperCase() : region.charAt(0).toUpperCase() + region.slice(1);
	}

	return newLocale;
}

export function formatLocaleJson(locale: string): string {
	const [lang, region] = locale.split('-');
	let newLocale = lang.toLocaleLowerCase();

	if (region) {
		newLocale += '-';
		newLocale +=
			region.length === 2
				? region.toUpperCase()
				: region.charAt(0).toUpperCase() + region.slice(1).toLocaleLowerCase();
	}

	return newLocale;
}
