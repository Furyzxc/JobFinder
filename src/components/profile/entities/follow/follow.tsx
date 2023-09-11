import { Button } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useGetIsFollowedQuery } from '@/components/profile/api/api.ts'
import { Follow } from '@/components/users/entities/follow'

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

export const FollowProfile = () => {
	const { userId = 0 } = useParams()

	const { data, isLoading } = useGetIsFollowedQuery(+userId)

	return <Follow followed={data} disabled={isLoading} userId={+userId} />
}
