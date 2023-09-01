import { LockOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'

export const Icon = () => {
	return (
		<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
			<LockOutlined />
		</Avatar>
	)
}
