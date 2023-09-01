import dayjs from 'dayjs'

export const formatTime = (date: string, pattern: string) => {
	return dayjs(date).format(pattern)
}
