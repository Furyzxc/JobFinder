import { useRequestTokenMutation } from '@/components/music/api'
import { useEffect } from 'react'

export const useMusic = () => {
	const [requestToken, { data }] = useRequestTokenMutation()

	useEffect(() => {
		data &&
		localStorage.setItem(
			'access-token',
			data.token_type + ' ' + data.access_token,
		)
	}, [data])

	useEffect(() => {
		requestToken()
	}, [requestToken])
}
