import { dialogsActions } from '@/components/dialogs'
import { profileActions } from '@/components/profile/profile'
import { paginatorActions } from '@/components/users'

export const rootActions = {
	...dialogsActions,
	...profileActions,
	...paginatorActions,
}
