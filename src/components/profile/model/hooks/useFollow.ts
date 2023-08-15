import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import {
	useGetIsFollowedQuery,
	useToggleIsFollowedMutation,
} from '../../api/api.ts'

interface Follow {
	isFollowed: boolean
	isLoading: boolean
	follow: () => void
	unfollow: () => void
}

export const useFollow = (): Follow => {
	const { userId = 0 } = useParams()

	const { data: isFollowed = false } = useGetIsFollowedQuery(+userId)

	const [toggleIsFollowed, { isLoading }] = useToggleIsFollowedMutation()

	const handleToggleFollow = useCallback(
		(follow: boolean) => {
			toggleIsFollowed({ userId: +userId, follow })
		},
		[toggleIsFollowed, userId]
	)

	const follow = useCallback(
		() => handleToggleFollow(true),
		[handleToggleFollow]
	)

	const unfollow = useCallback(
		() => handleToggleFollow(false),
		[handleToggleFollow]
	)

	return {
		isFollowed,
		isLoading,
		unfollow,
		follow,
	}
}
