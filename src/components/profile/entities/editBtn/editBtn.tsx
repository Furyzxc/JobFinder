import { EditOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui/button'

export const EditBtn = () => {
	const navigate = useNavigate()
	const onClick = () => navigate('/settings/profile')
	return (
		<Button onClick={onClick} startIcon={<EditOutlined />}>
			Edit Profile
		</Button>
	)
}
