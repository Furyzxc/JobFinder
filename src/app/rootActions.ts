import { ActionCreatorsMapObject } from '@reduxjs/toolkit'
import { chatActions } from '@/components/dialogs/model'
import {
	profileSettingsActions,
	themeActions,
} from '@/components/settings/model'

// add actions from your slices
export const rootActions: ActionCreatorsMapObject<any> = {
	...chatActions,
	...themeActions,
	...profileSettingsActions,
}
