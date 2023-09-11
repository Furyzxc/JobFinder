import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/shared/model/hooks'
import { useGetProfileQuery } from '@/components/profile'

interface Chat {
	name?: string
	avatar?: string | null
	isLoading: boolean
}

export const useChat = (): Chat => {
	const { name, avatar } = useAppSelector(state => state.chat)

	const { userId = 0 } = useParams()
	const { data, isLoading } = useGetProfileQuery(+userId, {
		skip: !userId,
	})

	if (name && avatar !== undefined) return { name, avatar, isLoading }

	return {
		name: data?.name,
		avatar: data?.photos.avatar,
		isLoading,
	}
}
