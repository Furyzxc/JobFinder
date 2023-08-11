import GroupRoundedIcon from '@mui/icons-material/GroupRounded'
import { Grid } from '@mui/material'
import { useState } from 'react'
import { useActions, useAppSelector } from '@/shared/model/hooks.ts'
import { Input } from '@/shared/ui/input/input.tsx'
import { getFriend } from '../../model/slice.ts'

export const Search = () => {
	const { setFriend, setSearchingTerm } = useActions()
	const friend = useAppSelector(getFriend)

	const [inputValue, setInputValue] = useState('')

	const handleIconClick = () => setFriend(!friend)
	const handleBlur = () => setSearchingTerm(inputValue)

	const handleInputChange = (value: string) => setInputValue(value)

	return (
		<Grid container sx={{ mt: '5px' }}>
			<Grid item xs={9} md={4} sm={6}>
				<Input
					placeholder={'Search'}
					onChange={handleInputChange}
					value={inputValue}
					onBlur={handleBlur}
				/>
			</Grid>
			<Grid item xs={2} sx={{ pt: '10px' }}>
				<GroupRoundedIcon
					sx={{ color: friend ? '#265D97' : 'white' }}
					onClick={handleIconClick}
				/>
			</Grid>
		</Grid>
	)
}
