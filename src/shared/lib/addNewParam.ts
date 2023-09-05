type NewParams = Record<string, string>

export const addNewParamWithParamsReturn = (
	prevParams: URLSearchParams,
	newParams?: NewParams
) => {
	return new URLSearchParams({
		...Object.fromEntries(prevParams.entries()),
		...newParams,
	})
}
