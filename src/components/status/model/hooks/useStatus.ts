import { Dispatch, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useInput } from '@/shared/model/hooks'
import { useAuth, useAuthInfo } from '@/components/authorization'
import { useGetUserStatusQuery, useSetStatusMutation } from '../../api/api.ts'

type Status = {
	open: boolean
	onClose: () => void
	reset: () => void
	editStatus: () => void
	isLoading: boolean
	emoji: string
	setEmoji: (value: string) => void
	bindInput: {
		value: string
		onChange: (event: any) => void
	}
	setInputValue: Dispatch<any>
	isAuthorized: boolean
}

export const useStatus = (): Status => {
	const [searchParams, setSearchParams] = useSearchParams()

	const closeStatus = () => {
		searchParams.delete('st')
		setSearchParams(searchParams)
	}

	const {
		bind: bindInput,
		setValue: setStatusValue,
		reset: resetInput,
	} = useInput('')

	const { value: emoji, setValue: setEmoji, reset: resetEmoji } = useInput('')
	const { isAuthorized } = useAuth()
	const { id } = useAuthInfo()

	const { data: statusValue } = useGetUserStatusQuery(id || 1, { skip: !id })
	const [setStatus, { isLoading }] = useSetStatusMutation()

	useEffect(() => {
		// setting status value from server
		if (statusValue) setStatusValue(statusValue)
	}, [setStatusValue, statusValue])

	const editStatus = () => {
		closeStatus()
		setStatus(bindInput.value)
	}

	// function that resets value in input and on server
	const reset = () => {
		resetInput()
		resetEmoji()

		statusValue && setStatus('')
	}

	return {
		open: !!searchParams.get('st'),
		reset,
		onClose: closeStatus,
		editStatus,
		setInputValue: setStatusValue,
		isLoading,
		emoji,
		setEmoji,
		bindInput,
		isAuthorized,
	}
}
