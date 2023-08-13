import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/app/appStore.ts'

interface SocialAccounts {
	github: string
	linkedin: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	telegram: string
}

interface ProfileSettings {
	name: string
	bio: string

	socialAccounts: SocialAccounts
}

const initialState: ProfileSettings = {
	name: '',
	bio: '',

	socialAccounts: {
		github: '',
		linkedin: '',
		facebook: '',
		instagram: '',
		twitter: '',
		website: '',
		youtube: '',
		telegram: '',
	},
}

interface SetMainValueAction {
	fieldName: 'name' | 'bio'
	value: string
}

export type SocialAccountsType =
	| 'github'
	| 'linkedin'
	| 'facebook'
	| 'instagram'
	| 'twitter'
	| 'website'
	| 'youtube'
	| 'telegram'

interface SetAccountValueAction {
	fieldName: SocialAccountsType
	value: string | null
}

export const profileSettingsSlice = createSlice({
	name: 'profileSettings',
	initialState,
	reducers: {
		setMainValue(state, { payload }: PayloadAction<SetMainValueAction>) {
			state[payload.fieldName] = payload.value
		},

		setAccountValue(state, { payload }: PayloadAction<SetAccountValueAction>) {
			state.socialAccounts[payload.fieldName] = payload.value || ''
		},

		setAccountsValues(state, action: PayloadAction<SocialAccounts>) {
			state.socialAccounts = action.payload
		},
	},
})

export const profileSettingsActions = profileSettingsSlice.actions

export const selectProfileSettings = (state: RootState) => state.profileSettings
