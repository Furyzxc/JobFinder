import { BookmarkBorderOutlined } from '@mui/icons-material'
import {
	Dispatch,
	SetStateAction,
	memo,
	useCallback,
	useEffect,
	useState,
} from 'react'
import { Button } from '@/shared/ui/button'
import { useToggleIsFollowedMutation } from '@/components/profile/api'

const SUCCESS_CODE = 0

type PropsType = {
	followed?: boolean
	userId: number
	disabled?: boolean
}

type ButtonProps = {
	userId: number
	setIsFollowed: Dispatch<SetStateAction<boolean>>
	follow?: boolean
	disabled?: boolean
}

const FollowButton = ({
	userId,
	setIsFollowed,
	follow,
	disabled,
}: ButtonProps) => {
	const [toggleIsFollowed, { isLoading, data, isError }] =
		useToggleIsFollowedMutation()

	const toggleFollow = useCallback(() => {
		if (!isLoading && follow !== undefined) {
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
			disabled={disabled || isLoading}
		>
			{follow ? 'Follow' : 'Unfollow'}
		</Button>
	)
}

export const Follow = memo(({ followed, userId, disabled }: PropsType) => {
	const [isFollowed, setIsFollowed] = useState(!!followed)

	useEffect(() => {
		if (followed !== undefined) setIsFollowed(followed)
	}, [followed])

	return (
		<FollowButton
			disabled={disabled}
			userId={userId}
			setIsFollowed={setIsFollowed}
			follow={!isFollowed}
		/>
	)
})
