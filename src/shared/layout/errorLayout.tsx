import { Snackbar } from '@mui/material'
import { useMuiDialog } from '@/shared/model/hooks'

export const ErrorLayout = () => {
	const { open, onClose } = useMuiDialog(true)

	return (
		<Snackbar
			message='Some error occured...'
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			open={open}
			onClose={onClose}
		/>
	)
}
