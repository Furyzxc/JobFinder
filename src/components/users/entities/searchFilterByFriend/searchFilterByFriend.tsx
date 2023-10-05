import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { FocusEvent, memo } from 'react'
import { useSearchParams } from 'react-router-dom'

export const SearchFilterByFriend = memo(() => {
	const [searchParams, setSearchParams] = useSearchParams()

	const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
		const value = e.target.value
		if (value !== 'null') {
			searchParams.set('friend', value)
		} else {
			searchParams.delete('friend')
		}

		setSearchParams(searchParams)
	}

	return (
		<RadioGroup sx={{ pl: '13px' }} row onBlur={handleBlur}>
			<FormControlLabel
				value='null'
				control={<Radio size={'small'} />}
				label='All users'
			/>
			<FormControlLabel
				value='true'
				control={<Radio size={'small'} />}
				label='Friends only'
			/>
			<FormControlLabel
				value='false'
				control={<Radio size={'small'} />}
				label='Only unfollowed'
			/>
		</RadioGroup>
	)
})
