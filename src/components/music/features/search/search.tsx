import { useInput } from '@/shared/model/hooks'
import { useSearchParams } from 'react-router-dom'
import { ChangeEvent } from 'react'
import { Grid } from '@mui/material'
import { Input } from '@/shared/ui/input'

export const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const { value, setValue } = useInput(searchParams.get('q'))

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value

		setValue(value)

		value ? searchParams.set('q', value) : searchParams.delete('q')
		setSearchParams(searchParams)
	}
	return (
		<Grid container sx={{ position: 'absolute', left: 0, top: '10px', width: '100%', justifyContent: 'end' }}>
			<Grid item textAlign={'center'} width={'50%'}>
				<Input value={value} onChange={onChange} />
			</Grid>
		</Grid>
	)
}
