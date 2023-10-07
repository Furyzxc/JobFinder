import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInput, useMuiDialog } from '@/shared/model/hooks'
import { useAuth, useAuthInfo } from '@/components/authorization'
import { useGetUserStatusQuery, useSetStatusMutation } from '../../api/api.ts'

type Status = {
	open: boolean
	openStatus: () => void
	onClose: () => void
	reset: () => void
	editStatus: () => void
	isLoading: boolean
	setInputValue: (value: string) => void
	emoji: string
	setEmoji: (value: string) => void
	bindInput: {
		value: string
		onChange: (event: any) => void
	}
}

export const useStatus = (): Status => {
	const { open, setOpen, onClose } = useMuiDialog(false)

	const { isAuthorized } = useAuth()
	const navigate = useNavigate()

	const openStatus = () => {
		// show login page if user is not authorized, otherwise show status
		isAuthorized ? setOpen(true) : navigate('/login')
	}

	const {
		bind: bindInput,
		setValue: setStatusValue,
		reset: resetInput,
	} = useInput('')

	const { value: emoji, setValue: setEmoji, reset: resetEmoji } = useInput('')

	const setInputValue = (value: string) => setStatusValue(value)

	const { id } = useAuthInfo()

	const { data: statusValue } = useGetUserStatusQuery(id || 1, { skip: !id })
	const [setStatus, { isLoading }] = useSetStatusMutation()

	useEffect(() => {
		// setting status value from server
		if (statusValue) setStatusValue(statusValue)
	}, [setStatusValue, statusValue])

	const editStatus = () => {
		onClose()
		setStatus(bindInput.value)
	}

	// function that resets value in input and on server
	const reset = () => {
		resetInput()
		resetEmoji()

		statusValue && setStatus('')
	}

	return {
		open,
		reset,
		openStatus,
		onClose,
		editStatus,
		setInputValue,
		isLoading,
		emoji,
		setEmoji,
		bindInput,
	}
}
