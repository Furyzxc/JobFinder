import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { navigationTabValues } from '@/shared/constants'
import { UnionOfKeys } from '@/shared/types'

const { PROFILE } = navigationTabValues

export type TabsType = UnionOfKeys<typeof navigationTabValues>

interface Navigation {
	value: TabsType
}

const initialState: Navigation = {
	value: PROFILE,
}

export const navigationSlice = createSlice({
	name: 'siteNavigation',
	initialState,
	reducers: {
		setNavigationTab(state, action: PayloadAction<TabsType>) {
			state.value = action.payload
		},
	},
})

export const navigationActions = navigationSlice.actions
