import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useStartChattingMutation } from '../../api/api.ts'
import { useProfile } from '../../model/hooks.ts'
import s from './sendBtn.module.css'

interface PropsType {
	userId: number
}

export const ProfileSendBtn = ({ userId }: PropsType) => {
	const { name: userName } = useProfile()

	const [startChatting, { data, isSuccess, isLoading }] =
		useStartChattingMutation()
	const [isChattingAccepted, setIsChattingAccepted] = useState(false)

	// sends request on endpoint after click on send message button
	const handleSendBtnClick = () => {
		if (userName) {
			startChatting(userId)
		}
	}

	// Navigates to dialogs page after success response from server

	useEffect(() => {
		if (isSuccess && data && data.resultCode === 0) setIsChattingAccepted(true)
	}, [data, isSuccess])

	if (isChattingAccepted) return <Navigate to={'/dialogs/' + userId} />

	return (
		<span className={s.send}>
			<Button
				variant='outlined'
				onClick={handleSendBtnClick}
				sx={{ width: '140px' }}
				disabled={isLoading}
			>
				Send Message
			</Button>
		</span>
	)
}
