import { profileActions } from '@/components/profile/profile'
import { paginatorActions } from '@/components/users'

export const rootActions = {
	...profileActions,
	...paginatorActions,
}
