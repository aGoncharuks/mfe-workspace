export function log(message, {colorHex} = {colorHex: '#1aa371'}) {
	console.log(`%c ${message}`, `color: ${colorHex}`);
}
