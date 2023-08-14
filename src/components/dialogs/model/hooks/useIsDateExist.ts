import dayjs from 'dayjs'

interface IsDateExist {
	// function that formats time to MMMM_D format
	// MMMM is full month name (August)
	// and D is date (13), return example: 'August 13'
	formattedToMMMM_D: (addedAt: string) => string
	// says date in array of dates or no
	isDateExist: (addedAt: string) => boolean
}

export const useIsDateExist = (): IsDateExist => {
	// initial dates
	const dates: string[] = []

	const formattedToMMMM_D = (addedAt: string) => dayjs(addedAt).format('MMMM D')

	const isDateExist = (addedAt: string) => {
		const formattedTime = formattedToMMMM_D(addedAt)

		// if time in array of dates, says that isExist = true
		if (dates.includes(formattedTime)) return true
		// otherwise pushes date to array and says that isExist = false
		dates.push(formattedTime)

		return false
	}

	return { formattedToMMMM_D, isDateExist }
}
