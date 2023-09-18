import { useEffect, useState } from 'react'
import { useInput } from '@/shared/model/hooks'
import { useAuthInfo } from '@/components/authorization'
import { useGetUserStatusQuery, useSetStatusMutation } from '../../api/api.ts'

type Status = {
	open: boolean
	showStatus: () => void
	closeStatus: () => void
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
	const [open, setOpen] = useState(false)

	const showStatus = () => setOpen(true)

	const closeStatus = () => setOpen(false)

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
		if (statusValue) setStatusValue(statusValue)
	}, [setStatusValue, statusValue])

	const editStatus = () => {
		closeStatus()
		setStatus(bindInput.value)
	}

	const reset = () => {
		resetInput()
		resetEmoji()

		statusValue && setStatus('')
	}

	return {
		open,
		reset,
		showStatus,
		closeStatus,
		editStatus,
		setInputValue,
		isLoading,
		emoji,
		setEmoji,
		bindInput,
	}
}
