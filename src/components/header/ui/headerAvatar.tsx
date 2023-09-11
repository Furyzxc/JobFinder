import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAvatar } from '@/shared/ui/avatar'

type PropsType = {
	name: string
	avatar: string | null
}

export const HeaderAvatar = ({ avatar, name }: PropsType) => {
	const navigate = useNavigate()

	const navigateToProfilePage = useCallback(
		() => navigate('/profile'),
		[navigate]
	)
	return (
		<span onClick={navigateToProfilePage} style={{ cursor: 'pointer' }}>
			<UserAvatar avatar={avatar} name={name} />
		</span>
	)
}
