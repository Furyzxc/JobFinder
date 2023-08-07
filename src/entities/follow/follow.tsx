import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import {
	useGetIsFollowedQuery,
	useToggleIsFollowedMutation,
} from '@/slices/profile'

interface FollowProps {
	userId: number
}

const SUCCESS_CODE = 0

export const Follow = ({ userId }: FollowProps) => {
	const [isFollowed, setIsFollowed] = useState(false)

	const { data: isFollowedResponse } = useGetIsFollowedQuery(userId)

	const [toggleIsFollowed, { data, isSuccess, isLoading }] =
		useToggleIsFollowedMutation()

	// dispatch thunk on button click and after its execution enable button
	const handleToggleFollow = (follow: boolean) => {
		toggleIsFollowed({ userId, follow })
	}

	const handleFollowClick = () => handleToggleFollow(true)
	const handleUnfollowClick = () => handleToggleFollow(false)

	useEffect(() => {
		if (isFollowedResponse !== undefined) setIsFollowed(isFollowedResponse)
	}, [isFollowedResponse])

	useEffect(() => {
		if (isSuccess && data && data.resultCode === SUCCESS_CODE) {
			setIsFollowed(prev => !prev)
		}
	}, [data, isSuccess])

	return (
		<span>
			{isFollowed ? (
				<Button
					variant='outlined'
					sx={{ width: '140px' }}
					onClick={handleUnfollowClick}
					disabled={isLoading}
				>
					Unfollow
				</Button>
			) : (
				<Button
					variant='outlined'
					sx={{ width: '140px' }}
					onClick={handleFollowClick}
					disabled={isLoading}
				>
					follow
				</Button>
			)}
		</span>
	)
}
