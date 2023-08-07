import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useActions, useAppSelector } from '@/shared/model/hooks.ts'
import { useStartChattingMutation } from '@/slices/dialogs'
import { selectProfileName } from '@/slices/profile'
import s from './sendBtn.module.css'

interface PropsType {
	userId: number
}

export const ProfileSendBtn = ({ userId }: PropsType) => {
	const { setDialogName } = useActions()
	const userName = useAppSelector(selectProfileName)

	const [startChatting, { data, isSuccess, isLoading }] =
		useStartChattingMutation()
	const [isChattingAccepted, setIsChattingAccepted] = useState(false)

	// sends request on endpoint after click on send message button
	const handleSendBtnClick = () => {
		if (userName) {
			startChatting(userId)
			setDialogName(userName)
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
