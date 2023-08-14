import { GroupRounded } from '@mui/icons-material'
import { useActions } from '@/shared/model/hooks.ts'
import { useUsersState } from '@/components/users/model/hooks.ts'

export const SearchFilterByFriend = () => {
	const { friend } = useUsersState()

	const { setFriend } = useActions()

	// if friend = true, sets friend to false
	const handleIconClick = () => setFriend(!friend)

	return (
		<GroupRounded
			sx={{ color: friend ? '#265D97' : 'white' }}
			onClick={handleIconClick}
		/>
	)
}
