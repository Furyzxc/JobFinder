import { chatActions } from '@/components/dialogs/model'
import { navigationActions } from '@/components/navigation/model'
import {
	profileSettingsActions,
	themeActions,
} from '@/components/settings/model'

// add actions from your slices
export const rootActions = {
	...chatActions,
	...themeActions,
	...profileSettingsActions,
	...navigationActions,
}
