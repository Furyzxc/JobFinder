import { profileSettingsActions } from '@/components/settings'
import { paginatorActions } from '@/components/users'

// add actions from your slices
export const rootActions = {
	...paginatorActions,
	...profileSettingsActions,
}
