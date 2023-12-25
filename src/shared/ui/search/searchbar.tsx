// src/components/Searchbar.tsx
import { SearchOutlined } from '@mui/icons-material'
import {
	Divider,
	IconButton,
	InputBase,
	InputBaseProps,
	Paper,
} from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { useInput } from '@/shared/model/hooks'

type Props = {
	// the outside components only needs to know if the searchbar form has been submitted
	onSubmit(searchTerm: string): void
	// add inputProps so that we can listen to onFocus / onBlur events if needed
	inputProps: InputBaseProps
	param: string
}
export const Searchbar = ({ param, ...props }: Props) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const {
		bind: { value, onChange },
	} = useInput()
	const handleChange = (e: any) => {
		onChange(e)
		const value = e.target.value
		// if term is not empty string, we set new value, if empty remove it
		value ? searchParams.set(param, value) : searchParams.delete(param)

		setSearchParams(searchParams)
	}
	return (
		// We use the Paper component since it already contains the style that we want.
		<Paper
			component='form'
			elevation={3}
			sx={{ display: 'flex', alignItems: 'center', px: 1, py: 0.5 }}
			onSubmit={(e) => {
				e.preventDefault()
				props.onSubmit((value as string) ?? '')
			}}
		>
			{/* Input base contains the fewest styles possible so it's perfect for creating custom components like these */}
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder='Search...'
				inputProps={{ 'aria-label': 'search' }}
				value={value}
				onChange={handleChange}
				{...props.inputProps}
			/>
			<Divider sx={{ height: 28, mx: 0.5 }} orientation='vertical' />
			<IconButton type='submit'>
				<SearchOutlined />
			</IconButton>
		</Paper>
	)
}
