import { useParams } from 'react-router-dom'
import { useRequestMessagesQuery } from '../../api/api.ts'
import { MessagesResponse } from '../../api/types.ts'

interface UseMessagesRequest {
	messagesData: MessagesResponse | undefined
	isFetching: boolean
	isError: boolean
	urlId: number
}

export const useMessagesRequest = (): UseMessagesRequest => {
	const { userId = 0 } = useParams()

	const { data, isFetching, isError } = useRequestMessagesQuery(
		{ id: +userId },
		{ skip: !userId }
	)

	return { messagesData: data, isFetching, isError, urlId: +userId }
}
