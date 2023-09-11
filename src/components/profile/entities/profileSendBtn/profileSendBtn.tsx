import { ForwardToInboxOutlined } from '@mui/icons-material'
import { useNavigate, useParams } from 'react-router-dom'
import { useActions } from '@/shared/model/hooks'
import { Button } from '@/shared/ui/button'

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
		<Button onClick={handleSendBtnClick} startIcon={<ForwardToInboxOutlined />}>
			Send Message
		</Button>
	)
}
