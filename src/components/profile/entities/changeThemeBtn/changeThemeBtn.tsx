import { ContrastOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui/button'

export const ChangeThemeBtn = () => {
	const navigate = useNavigate()
	const onClick = () => navigate('/settings/appearance')
	return (
		<Button onClick={onClick} startIcon={<ContrastOutlined />}>
			Change Theme
		</Button>
	)
}
