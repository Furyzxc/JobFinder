import { MessageResponseType } from '@/components/dialogs'
import { formattedToMMMM_D } from './formattedToMMMM_D.ts'

export const checkSameToPrevious = (
	index: number,
	messages: MessageResponseType[]
) => {
	if (index <= 0) return false

	const previousTime = formattedToMMMM_D(messages[index - 1].addedAt)
	const currentTime = formattedToMMMM_D(messages[index].addedAt)

	return previousTime === currentTime
}
