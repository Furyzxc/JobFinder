import { Snackbar } from '@mui/material'
import { useBoolean } from 'usehooks-ts'

export const ErrorLayout = () => {
	const { value, setFalse } = useBoolean(true)

	return (
		<Snackbar
			message='Some error occured...'
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			open={value}
			onClose={setFalse}
		/>
	)
}
