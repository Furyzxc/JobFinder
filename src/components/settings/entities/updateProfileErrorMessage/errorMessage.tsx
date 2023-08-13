import { useActions } from '@/shared/model/hooks.ts'
import { ErrorMessage } from '@/shared/ui/errorMessage'
import { useProfileSettings } from '@/components/settings/model/hooks'

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
