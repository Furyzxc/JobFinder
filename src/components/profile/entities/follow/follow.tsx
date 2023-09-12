import { useParams } from 'react-router-dom'
import { useGetIsFollowedQuery } from '@/components/profile/api/api.ts'
import { Follow } from '@/components/users/entities/follow'

export const FollowProfile = () => {
	const { userId = 0 } = useParams()

	const { data, isLoading } = useGetIsFollowedQuery(+userId)

	return <Follow followed={data} disabled={isLoading} userId={+userId} />
}
