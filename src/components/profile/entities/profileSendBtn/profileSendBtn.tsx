import { Button } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStartChattingMutation } from '../../api/api.ts'
import { useGetProfile } from '../../model/hooks'

interface PropsType {
	userId: number
}

export const ProfileSendBtn = ({ userId }: PropsType) => {
	const { profileData } = useGetProfile()

	const [startChatting, { data, isLoading }] = useStartChattingMutation()

	// sends request on endpoint after click on send message button
	const handleSendBtnClick = () => {
		if (profileData) {
			startChatting(userId)
		}
	}

	const navigate = useNavigate()

	// Navigates to dialogs page after success response from server
	useEffect(() => {
		if (data && data.resultCode === 0) navigate('/dialogs/' + userId)
	}, [data, navigate, userId])

	return (
		<Button
			variant='outlined'
			onClick={handleSendBtnClick}
			sx={{ minWidth: '140px' }}
			disabled={isLoading}
		>
			Send Message
		</Button>
	)
}
