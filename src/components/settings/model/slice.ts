import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/app/appStore.ts'
import { api } from '@/components/settings/api/api.ts'

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

	updateProfileErrorMessage: string | undefined
	isLoading: boolean
	isError: boolean
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

	updateProfileErrorMessage: undefined,
	isLoading: false,
	isError: false,
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

const SUCCESS_CODE = 0

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

		clearErrorMessage(state) {
			state.updateProfileErrorMessage = undefined
		},
	},

	extraReducers: builder => {
		builder.addMatcher(api.endpoints.editProfileInfo.matchPending, state => {
			state.isLoading = true
			state.isError = false
		})
		builder.addMatcher(
			api.endpoints.editProfileInfo.matchFulfilled,
			(state, { payload }) => {
				state.isLoading = false
				state.isError = false

				// checking result code and if it is success clear error message
				if (payload.resultCode === SUCCESS_CODE) {
					state.updateProfileErrorMessage = undefined
				}
				// setting error message to state if this message exist
				else if (payload.messages.length >= 1) {
					state.updateProfileErrorMessage = payload.messages[0]
				}
			}
		)
		builder.addMatcher(api.endpoints.editProfileInfo.matchFulfilled, state => {
			state.isError = true
		})
	},
})

export const profileSettingsActions = profileSettingsSlice.actions

export const selectProfileSettings = (state: RootState) => state.profileSettings
