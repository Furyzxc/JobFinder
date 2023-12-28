import { useEffect } from 'react'
import { useRequestTokenMutation } from '@/components/music/api'

type Music = {
	isLoading: boolean
	isError: boolean
}

export const useMusic = (): Music => {
	const [requestToken, { data, isLoading, isError }] = useRequestTokenMutation()

	useEffect(() => {
		data &&
			localStorage.setItem(
				'access-token',
				data.token_type + ' ' + data.access_to,
				ken
			)
	}, [data])

	useEffect(() => {
		requestToken()
	}, [requestToken])

	return { isLoading, isError }
}
