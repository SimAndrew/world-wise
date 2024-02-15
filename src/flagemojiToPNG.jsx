export function flagemojiToPNG(flag) {
	const countryCode = [...flag]
		.map((char) =>
			String.fromCharCode(char.codePointAt() - 127397).toLowerCase(),
		)
		.join('');

	return (
		<img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
	);
}
