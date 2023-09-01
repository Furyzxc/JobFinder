import { chatActions } from '@/components/dialogs/model'
import { profileSettingsActions } from '@/components/settings/model'
import { paginatorActions } from '@/components/users/model'

// add actions from your slices
export const rootActions = {
	...paginatorActions,
	...chatActions,
	...profileSettingsActions,
}
