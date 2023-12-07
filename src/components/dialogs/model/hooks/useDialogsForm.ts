import { KeyboardEvent } from 'react'
import { UseFormRegister, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
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

export const useDialogsForm = (): DialogsForm => {
	// id from query params
	const { userId = 0 } = useParams()
	const {
		handleSubmit,
		register,
		reset,
		formState: { isValid },
	} = useForm<FormValues>()

	// hook that will handle send message request
	const [sendMessage, { isLoading: disabled }] = useSendMessageMutation()

	const submit = handleSubmit(({ input }: FormValues) => {
		const id = Number(userId)

		// check that id is number ( Number('') = NaN )
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

	return {
		submit,
		sendOnEnterClick,
		disabled,
		register,
		isValid,
	}
}
