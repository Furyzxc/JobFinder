import dayjs from 'dayjs'
import { useFormattedTime } from '@/shared/model/hooks'

export const useDialogsTime = (date: string) => {
	return useFormattedTime(
		date,
		dayjs().isSame(dayjs(date), 'day') ? 'h:mm A' : 'DD/MM/YYYY'
	)
}
