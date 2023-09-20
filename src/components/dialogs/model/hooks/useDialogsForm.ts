import dayjs from 'dayjs'
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { UseFormRegister, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useActions, useInput } from '@/shared/model/hooks'
import { PendingMessage } from '@/components/dialogs/model'
import { useSendMessageMutation } from '../../api/api.ts'

interface FormValues {
	input: string
}

interface DialogsForm {
	submit: () => void
	disabled: boolean
	sendOnEnterClick: (e: KeyboardEvent<HTMLTextAreaElement>) => void
	bind: {
		value: string
		onChange: (e: ChangeEvent<HTMLInputElement>) => void
	}
	register: UseFormRegister<FormValues>
}

const SUCCESS_CODE = 0

export const useDialogsForm = (): DialogsForm => {
	const [requstIds, setRequstIds] = useState([Math.random()])
	const { userId = 0 } = useParams()
	const { addMessage, removePending, removeMessage } = useActions()
	const { bind, reset } = useInput('')
	const { handleSubmit, register } = useForm<FormValues>()

	const [sendMessage, { isLoading: disabled, data, isError }] =
		useSendMessageMutation()

	const submit = handleSubmit(({ input }: FormValues) => {
		const message = createMessage(input, requstIds[0])

		addMessage(message)
		setRequstIds((prev) => [...prev, Math.random()])
		// sending message and reset input
		sendMessage({ userId: +userId, body: input })
		reset()
	})

	const sendOnEnterClick = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		// submitting form after click on enter
		if (e.code === 'Enter') submit()
	}

	useEffect(() => {
		if (data?.resultCode === SUCCESS_CODE) {
			removePending(requstIds[0])
			setRequstIds((prev) => prev.slice(1))
		}
		if (isError || (data && data.resultCode !== SUCCESS_CODE)) {
			removeMessage(requstIds[0])
			setRequstIds((prev) => prev.slice(1))
		}
		// @ts-ignore
	}, [data, isError, removeMessage, removePending])

	return {
		submit,
		sendOnEnterClick,
		disabled,
		bind,
		register,
	}
}

function createMessage(body: string, id: number): PendingMessage {
	return {
		addedAt: dayjs().format(''),
		senderId: 0,
		body,
		pending: true,
		viewed: false,
		id,
	}
}
