import { authActions } from '@/components/authorization'
import { profileActions } from '@/components/profile'
import { profileSettingsActions } from '@/components/settings'
import { paginatorActions } from '@/components/users'

// add actions from your slices
export const rootActions = {
	...authActions,
	...profileActions,
	...paginatorActions,
	...profileSettingsActions,
}
