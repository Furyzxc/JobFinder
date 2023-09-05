import { Grid } from '@mui/material'
import { ChangeEvent, memo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { addNewParamWithParamsReturn } from '@/shared/lib/addNewParam.ts'
import { useDebounce, useInput } from '@/shared/model/hooks'
import { Input } from '@/shared/ui/input'

export const Search = memo(() => {
	const [searchParams, setSearchParams] = useSearchParams()

	const {
		bind: { value: term, onChange },
	} = useInput(searchParams.get('term') || '')

	const debouncedTermChange = useDebounce(
		() =>
			setSearchParams(prevParams =>
				addNewParamWithParamsReturn(prevParams, { page: '1', term })
			),
		1000
	)

	useEffect(() => {
		debouncedTermChange()
	}, [term])

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event)
	}

	return (
		<Grid container>
			<Grid item md={5} xs={12} sm={9}>
				<Input
					value={term}
					onChange={handleChange}
					placeholder={'Search'}
					autoComplete={'off'}
					width={'100%'}
				/>
			</Grid>
		</Grid>
	)
})
