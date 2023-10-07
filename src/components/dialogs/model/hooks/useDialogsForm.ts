import dayjs from 'dayjs'
import { KeyboardEvent, useEffect, useState } from 'react'
import { UseFormRegister, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useActions } from '@/shared/model/hooks'
import { PendingMessage } from '@/components/dialogs/model'
import { useSendMessageMutation } from '../../api/api.ts'

interface FormValues {
	input: string
}

interface DialogsForm {
	submit: () => void
	disabled: boolean
	sendOnEnterClick: (e: KeyboardEvent<HTMLTextAreaElement>) => void
	register: UseFormRegister<FormValues>
	isValid: boolean
}

const SUCCESS_CODE = 0

export const useDialogsForm = (): DialogsForm => {
	// state for handling id of sent message (need id for deleting if error occurred during request)
	const [requestId, setRequestId] = useState<number>()
	const { userId = 0 } = useParams()
	const { addMessage, removePending, removeMessage } = useActions()
	const {
		handleSubmit,
		register,
		reset,
		formState: { isValid },
	} = useForm<FormValues>()

	// hook that will handle send message request
	const [sendMessage, { isLoading: disabled, data, isError }] =
		useSendMessageMutation()

	const submit = handleSubmit(({ input }: FormValues) => {
		const messageId = Math.random()
		// setting id of sent message
		setRequestId(messageId)
		// creating body for message
		const message = createMessage(input, messageId)
		// optimistic push message to array of messages
		addMessage(message)

		const id = Number(userId)
		// check that id is number ( Number('sts') = NaN )
		if (!isNaN(id)) {
			// sending message on server and reset input
			sendMessage({ userId: id, body: input })
			reset()
		} else alert('Some error occured during sending...')
	})

	const sendOnEnterClick = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		// submitting form after click on enter
		if (e.code === 'Enter') submit()
	}

	useEffect(() => {
		if (data?.resultCode === SUCCESS_CODE) {
			// if request of sending message was success, setting pending flag
			// of message to false
			requestId && removePending(requestId)
			// deleting message from list of
		}
		if (isError || (data && data.resultCode !== SUCCESS_CODE)) {
			// if error occured during sending, removing message from array
			requestId && removeMessage(requestId)
		}
		// @ts-ignore
	}, [data, isError, removeMessage, removePending])

	return {
		submit,
		sendOnEnterClick,
		disabled,
		register,
		isValid,
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
