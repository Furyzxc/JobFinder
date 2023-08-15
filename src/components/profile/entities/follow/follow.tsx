import { Button } from '@mui/material'
import { useFollow } from '@/components/profile/model/hooks/useFollow.ts'

type PropsType = {
	isLoading: boolean
	onClick: () => void
	children: string
}

export const FollowButton = ({ isLoading, onClick, children }: PropsType) => {
	return (
		<Button
			disabled={isLoading}
			onClick={onClick}
			variant='outlined'
			sx={{ width: '140px' }}
		>
			{children}
		</Button>
	)
}

export const Follow = () => {
	const { isFollowed, isLoading, follow, unfollow } = useFollow()

	return isFollowed ? (
		<FollowButton onClick={unfollow} isLoading={isLoading}>
			Unfollow
		</FollowButton>
	) : (
		<FollowButton onClick={follow} isLoading={isLoading}>
			Follow
		</FollowButton>
	)
}
