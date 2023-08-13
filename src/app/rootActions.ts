import { authActions } from '@/components/authorization'
import { profileActions } from '@/components/profile'
import { profileSettingsActions } from '@/components/settings'
import { paginatorActions } from '@/components/users'

export const rootActions = {
	...authActions,
	...profileActions,
	...paginatorActions,
	...profileSettingsActions,
}
