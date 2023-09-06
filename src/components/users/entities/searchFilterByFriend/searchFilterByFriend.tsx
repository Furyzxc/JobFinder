import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useInput } from '@/shared/model/hooks'

export const SearchFilterByFriend = memo(() => {
	const [searchParams, setSearchParams] = useSearchParams()
	const friend = searchParams.get('friend') || 'null'

	const {
		bind: { value, onChange },
	} = useInput(friend)

	const handleBlur = () => {
		if (value !== 'null') {
			searchParams.set('friend', value)
		} else {
			searchParams.delete('friend')
		}

		setSearchParams(searchParams)
	}

	return (
		<RadioGroup
			value={value}
			onChange={onChange}
			sx={{ pl: '13px' }}
			row
			onBlur={handleBlur}
		>
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
