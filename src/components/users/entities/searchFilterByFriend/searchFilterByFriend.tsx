import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { memo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { addNewParamWithParamsReturn } from '@/shared/lib/addNewParam.ts'
import { useInput } from '@/shared/model/hooks'

export const SearchFilterByFriend = memo(() => {
	const [searchParams, setSearchParams] = useSearchParams()
	const friend = searchParams.get('friend') || 'null'

	const { bind } = useInput(friend)

	const handleBlur = () => {
		setSearchParams(prevParams =>
			addNewParamWithParamsReturn(prevParams, {
				friend: bind.value !== 'null' ? bind.value : '',
			})
		)
	}

	return (
		<RadioGroup {...bind} sx={{ pl: '13px' }} row onBlur={handleBlur}>
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
