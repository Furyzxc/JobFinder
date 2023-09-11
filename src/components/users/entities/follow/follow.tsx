import { BookmarkBorderOutlined } from '@mui/icons-material'
import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useState,
} from 'react'
import { Button } from '@/shared/ui/button'
import { useToggleIsFollowedMutation } from '@/components/profile/api'

const SUCCESS_CODE = 0

type PropsType = {
	followed: boolean
	userId: number
}

type ButtonProps = {
	userId: number
	setIsFollowed: Dispatch<SetStateAction<boolean>>
	follow: boolean
}

const FollowButton = ({ userId, setIsFollowed, follow }: ButtonProps) => {
	const [toggleIsFollowed, { isLoading, data, isError }] =
		useToggleIsFollowedMutation()

	const toggleFollow = useCallback(() => {
		if (!isLoading) {
			setIsFollowed(prev => !prev)
			toggleIsFollowed({ userId, follow })
		}
	}, [isLoading, setIsFollowed, toggleIsFollowed, userId, follow])

	useEffect(() => {
		if ((data && data.resultCode !== SUCCESS_CODE) || isError) {
			setIsFollowed(prev => !prev)
		}
	}, [data, isError, setIsFollowed])

	return (
		<Button
			startIcon={<BookmarkBorderOutlined />}
			onClick={toggleFollow}
			disabled={isLoading}
		>
			{follow ? 'Follow' : 'Unfollow'}
		</Button>
	)
}

export const Follow = ({ followed, userId }: PropsType) => {
	const [isFollowed, setIsFollowed] = useState(followed)

	return (
		<div style={{ position: 'absolute', top: '10px', right: '10px' }}>
			<FollowButton
				userId={userId}
				setIsFollowed={setIsFollowed}
				follow={!isFollowed}
			/>
		</div>
	)
}
