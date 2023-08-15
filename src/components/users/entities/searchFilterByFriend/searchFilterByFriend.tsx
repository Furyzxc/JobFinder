import { GroupRounded } from '@mui/icons-material'
import { memo } from 'react'
import { useActions } from '@/shared/model/hooks'
import { useUsersState } from '../../model/hooks'

export const SearchFilterByFriend = memo(() => {
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
})
