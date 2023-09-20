import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useActions } from '@/shared/model/hooks'
import { useRequestMessagesQuery } from '@/components/dialogs/api/api.ts'
import { useChatSlice } from '@/components/dialogs/model/hooks/useChatSlice.ts'
import { useGetProfileQuery } from '@/components/profile'

interface Chat {
	messagesLoading: boolean
	profileLoading: boolean
	isError: boolean
}

export const useChat = (): Chat => {
	const { userId } = useParams()

	const {
		profile: { userId: haveInfoForUser },
	} = useChatSlice()

	const { setChatProfile, setMessages } = useActions()

	const id = Number(userId)
	const {
		data: profile,
		isLoading: profileLoading,
		isError: profileError,
	} = useGetProfileQuery(id, {
		skip: !id || !!haveInfoForUser,
	})

	const {
		isFetching: messagesLoading,
		isError: messagesError,
		data: messagesData,
	} = useRequestMessagesQuery(
		{ id, count: 20 },
		{
			skip: !id,
		}
	)

	useEffect(() => {
		if (profile) {
			setChatProfile({
				name: profile.name,
				avatar: profile.photos.avatar,
				userId: profile.userId,
			})
		}
	}, [profile, setChatProfile])

	useEffect(() => {
		if (messagesData) {
			setMessages(
				// adding pending property to each message
				messagesData.items.map((message) => ({
					...message,
					pending: false,
				}))
			)
		}
	}, [messagesData, setMessages])

	return {
		profileLoading,
		messagesLoading,
		isError: [messagesError, profileError].some((err) => err === true),
	}
}
