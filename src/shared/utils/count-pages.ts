export const countPages = (totalCount: number, portion: number) => {
	return Math.ceil(totalCount / portion)
}
