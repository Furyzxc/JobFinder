import { useActions } from '@/shared/model/hooks'
import { ErrorMessage } from '@/shared/ui/errorMessage'

type PropsType = {
	error: string
}

export const Error = ({ error }: PropsType) => {
	const { setError } = useActions()

	const handleCrossClick = () => setError('')

	return <ErrorMessage message={error} onCrossClick={handleCrossClick} />
}
