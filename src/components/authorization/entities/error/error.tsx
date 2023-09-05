import { useCallback } from 'react'
import { useAppDispatch } from '@/shared/model/hooks'
import { ErrorMessage } from '@/shared/ui/errorMessage'
import { setError } from '../../model'

type PropsType = {
	error: string
}

export const Error = ({ error }: PropsType) => {
	const dispatch = useAppDispatch()

	const handleCrossClick = useCallback(
		() => dispatch(setError(null)),
		[dispatch]
	)
	return <ErrorMessage message={error} onCrossClick={handleCrossClick} />
}
