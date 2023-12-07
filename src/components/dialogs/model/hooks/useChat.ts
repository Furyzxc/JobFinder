import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useActions } from '@/shared/model/hooks'
import { MessageResponseType } from '@/components/dialogs'
import { useGetProfileQuery } from '@/components/profile'
import { useRequestMessagesQuery } from '../../api/api.ts'
import { useChatSlice } from './useChatSlice.ts'

interface Chat {
	messagesLoading: boolean
	profileLoading: boolean
	isError: boolean
	messages: MessageResponseType[]
}

export const useChat = (): Chat => {
	// taking user id from params
	const { userId } = useParams()
	// taking user id from state
	const {
		profile: { userId: profileId },
	} = useChatSlice()
	// taking functions that dispatch respective actions
	const { setChatProfile } = useActions()
	// converting id to type: number, possible NaN
	const id = Number(userId)
	const {
		data: profile,
		isLoading: profileLoading,
		isError: profileError,
	} = useGetProfileQuery(id, {
		// if we don't have id in query params or we have profile id in state - we do not request data
		skip: !id || !!profileId,
	})

	const {
		isFetching: messagesLoading,
		isError: messagesError,
		data: messagesData,
	} = useRequestMessagesQuery(
		{ id, count: 20 },
		{
			// we do not request data if not correct id in query params
			skip: !id,
		}
	)

	useEffect(() => {
		profile &&
			setChatProfile({
				name: profile.name,
				avatar: profile.photos.avatar,
				userId: profile.userId,
			})
	}, [profile, setChatProfile])

	return {
		messages: messagesData ? messagesData.items : [],
		profileLoading,
		messagesLoading,
		isError: [messagesError, profileError].some((err) => err === true),
	}
}
