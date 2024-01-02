import dayjs from 'dayjs'

export const formattedToMMMM_D = (addedAt: string) =>
	dayjs(addedAt).format('MMMM D')
