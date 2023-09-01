import dayjs from 'dayjs'
import { formatTime } from '@/shared/lib/format-time.ts'

export const formatTimeByDate = (date: string) => {
	return formatTime(
		date,
		// if date is today's format to 10:48 AM, otherwise to 10/12/2006
		dayjs().isSame(dayjs(date), 'day') ? 'h:mm A' : 'DD/MM/YYYY'
	)
}
