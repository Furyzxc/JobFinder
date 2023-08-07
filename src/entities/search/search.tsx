import GroupRoundedIcon from '@mui/icons-material/GroupRounded'
import { FocusEvent } from 'react'
import { useActions, useAppSelector } from '@/shared/model/hooks.ts'
import { Input } from '@/shared/ui/input/input.tsx'
import { getFriend } from '@/slices/paginator'
import s from './search.module.css'

export const Search = () => {
	const { setFriend, setSearchingTerm } = useActions()
	const friend = useAppSelector(getFriend)

	const handleIconClick = () => setFriend(!friend)
	const handleBlur = (e: FocusEvent<HTMLInputElement>) =>
		setSearchingTerm(e.target.value)

	return (
		<div className={s.searchContainer}>
			<Input name='Search' value={''} key={2} onBlur={handleBlur} />
			<GroupRoundedIcon
				fontSize='small'
				sx={{ color: friend ? '#265D97' : 'white', mt: '20px', ml: '10px' }}
				onClick={handleIconClick}
			/>
		</div>
	)
}
