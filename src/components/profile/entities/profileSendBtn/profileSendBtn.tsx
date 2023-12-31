import { ForwardToInboxOutlined } from '@mui/icons-material'
import { useNavigate, useParams } from 'react-router-dom'
import { useActions } from '@/shared/model/hooks'
import { Button } from '@/shared/ui/button'

interface PropsType {
	name?: string
	avatar?: string | null
}

export const ProfileSendBtn = ({ name, avatar }: PropsType) => {
	const { userId = 0 } = useParams()

	const navigate = useNavigate()

	const { setChatProfile } = useActions()

	const handleSendBtnClick = () => {
		navigate('/dialogs/' + userId)
		if (name && avatar !== undefined && userId) {
			setChatProfile({ name, avatar, userId: +userId })
		}
	}
	return (
		<Button onClick={handleSendBtnClick} startIcon={<ForwardToInboxOutlined />}>
			Send Message
		</Button>
	)
}
