import { useActions } from '@/shared/model/hooks'
import { ErrorMessage } from '@/shared/ui/errorMessage'

type PropsType = {
	error: string
}

export const SettingsErrorMessage = ({ error }: PropsType) => {
	const { clearErrorMessage } = useActions()

	const handleCrossClick = () => clearErrorMessage()

	return (
		<div style={{ width: '95%' }}>
			<ErrorMessage message={error} onCrossClick={handleCrossClick} />
		</div>
	)
}
