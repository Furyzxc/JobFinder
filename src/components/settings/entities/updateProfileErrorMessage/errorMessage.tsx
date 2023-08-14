import { useActions } from '@/shared/model/hooks'
import { ErrorMessage } from '@/shared/ui/errorMessage'
import { useProfileSettings } from '../../model/hooks'

export const UpdateErrorMessage = () => {
	const { updateProfileErrorMessage } = useProfileSettings()

	const { clearErrorMessage } = useActions()

	const handleCrossClick = () => clearErrorMessage()

	if (updateProfileErrorMessage) {
		return (
			<div
				style={{
					width: '95%',
				}}
			>
				<ErrorMessage
					message={updateProfileErrorMessage}
					onCrossClick={handleCrossClick}
				/>
			</div>
		)
	}
	return null
}
