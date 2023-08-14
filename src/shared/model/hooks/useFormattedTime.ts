import dayjs from 'dayjs'

// hook for formatting time to 10:48 AM style
export const useFormattedTime = (date: string, pattern: string) => {
	return dayjs(date).format(pattern)
}
