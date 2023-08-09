import GroupRoundedIcon from '@mui/icons-material/GroupRounded'
import { Grid } from '@mui/material'
import { FocusEvent } from 'react'
import { useActions, useAppSelector } from '@/shared/model/hooks.ts'
import { Input } from '@/shared/ui/input/input.tsx'
import { getFriend } from '@/slices/paginator'

export const Search = () => {
	const { setFriend, setSearchingTerm } = useActions()
	const friend = useAppSelector(getFriend)

	const handleIconClick = () => setFriend(!friend)
	const handleBlur = (e: FocusEvent<HTMLInputElement>) =>
		setSearchingTerm(e.target.value)

	return (
		<Grid container spacing={2} sx={{ ml: '10px' }}>
			<Grid item xs={4}>
				<Input name='Search' value={''} key={2} onBlur={handleBlur} />
			</Grid>
			<Grid item xs={1}>
				<GroupRoundedIcon
					fontSize='small'
					color={'primary'}
					sx={{ color: friend ? '#265D97' : 'white', mt: '20px' }}
					onClick={handleIconClick}
				/>
			</Grid>
		</Grid>
	)
}
