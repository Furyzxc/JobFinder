import { dialogsActions } from '@/slices/dialogs'
import { paginatorActions } from '@/slices/paginator'
import { profileActions } from '@/slices/profile'

export const rootActions = {
	...dialogsActions,
	...profileActions,
	...paginatorActions,
}
