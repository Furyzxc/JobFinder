import { Button } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useActions } from '@/shared/model/hooks'

interface PropsType {
	name?: string
	avatar?: string | null
}

export const ProfileSendBtn = ({ name, avatar }: PropsType) => {
	const { userId } = useParams()

	const navigate = useNavigate()

	const { setChatInfo } = useActions()

	const handleSendBtnClick = () => {
		navigate('/dialogs/' + userId)
		setChatInfo({ name, avatar })
	}
	return (
		<Button
			variant='outlined'
			onClick={handleSendBtnClick}
			sx={{ minWidth: '140px' }}
		>
			Send Message
		</Button>
	)
}
