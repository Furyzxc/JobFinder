import { chatActions } from '@/components/dialogs/model'
import { profileSettingsActions } from '@/components/settings/model'

// add actions from your slices
export const rootActions = {
	...chatActions,
	...profileSettingsActions,
}
