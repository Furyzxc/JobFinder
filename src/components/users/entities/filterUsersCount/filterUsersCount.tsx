import { Slider } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { useInput } from '@/shared/model/hooks'

export const FilterUsersCount = () => {
	const [searchParams, setSearchParams] = useSearchParams()

	const { bind } = useInput(Number(searchParams.get('count')) || 10)

	const handleBlur = () => {
		// go back on first page after changing count
		searchParams.set('count', bind.value)
		searchParams.delete('page')

		setSearchParams(searchParams)
	}
	return (
		<Slider
			{...bind}
			onBlur={handleBlur}
			min={10}
			max={100}
			valueLabelDisplay='auto'
		/>
	)
}
