import { useAppDispatch } from '@/shared/model/hooks'
import { ErrorMessage } from '@/shared/ui/errorMessage'
import { setError } from '../../model'

type PropsType = {
	error: string
}

export const Error = ({ error }: PropsType) => {
	const dispatch = useAppDispatch()

	const handleCrossClick = () => dispatch(setError(null))

	return <ErrorMessage message={error} onCrossClick={handleCrossClick} />
}
