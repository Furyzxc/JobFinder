import { Slider } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { addNewParamWithParamsReturn } from '@/shared/lib/addNewParam.ts'
import { useInput } from '@/shared/model/hooks'

export const FilterUsersCount = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const { bind } = useInput(Number(searchParams.get('count')) || 10)

	const handleBlur = () => {
		setSearchParams(prevParams =>
			addNewParamWithParamsReturn(prevParams, { count: bind.value })
		)
	}
	return (
		<Slider
			{...bind}
			onBlur={handleBlur}
			size={'medium'}
			min={10}
			max={100}
			valueLabelDisplay='auto'
			aria-label='Default'
		/>
	)
}
