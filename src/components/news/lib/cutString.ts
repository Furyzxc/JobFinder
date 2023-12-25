export function cutString(inputString: string) {
	const maxLength = 28

	if (inputString.length <= maxLength) {
		return inputString
	} else {
		return inputString.substring(0, maxLength - 3) + '...'
	}
}
