import { ChangeEvent, KeyboardEvent } from 'react'
import { UseFormRegister, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { useInput } from '@/shared/model/hooks'
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

export const useDialogsForm = (): DialogsForm => {
	const { userId } = useParams()

	const { bind, reset } = useInput('')

	const { handleSubmit, register } = useForm<FormValues>()

	const [sendMessage, { isLoading: disabled }] = useSendMessageMutation()

	const submit = handleSubmit(({ input }: FormValues) => {
		userId && sendMessage({ userId: +userId, body: input })
		reset()
	})

	const sendOnEnterClick = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		// submitting form after click on enter
		if (e.code === 'Enter') submit()
	}
	return {
		submit,
		sendOnEnterClick,
		disabled,
		bind,
		register,
	}
}
