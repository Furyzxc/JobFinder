import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/app/appStore.ts'
import { ProfileResponseBody, SocialAccounts } from '@/components/profile'

interface ProfileSettings extends ProfileResponseBody {
	updateProfileErrorMessage: string | null
}

const initialState: ProfileSettings = {
	userId: 0,
	name: '',
	bio: null,
	lookingForAJob: false,
	lookingForAJobDescription: '',
	photos: {
		avatar: null,
		backgroundImg: null,
	},

	socialAccounts: {
		github: null,
		linkedin: null,
		facebook: null,
		instagram: null,
		twitter: null,
		website: null,
		youtube: null,
		telegram: null,
	},

	updateProfileErrorMessage: null,
}

export type MainFieldType =
	| 'name'
	| 'bio'
	| 'lookingForAJobDescription'
	| 'lookingForAJob'

type SetMainValueAction = {
	fieldName: MainFieldType
	value: string | boolean
}

export type SocialAccountType = keyof SocialAccounts

interface SetAccountValueAction {
	fieldName: SocialAccountType
	value: string | null
}

export const profileSettingsSlice = createSlice({
	name: 'profileSettings',
	initialState,
	reducers: {
		setProfileInfo(state, action: PayloadAction<ProfileResponseBody>) {
			return {
				...state,
				...action.payload,
			}
		},

		setMainValue(state, { payload }: PayloadAction<SetMainValueAction>) {
			const { fieldName, value } = payload

			if (
				// if payload refers to string value
				typeof value === 'string' &&
				(fieldName === 'name' ||
					fieldName === 'bio' ||
					fieldName === 'lookingForAJobDescription')
			) {
				// setting string value
				state[fieldName] = value
			} else if (
				// if payload refers boolean value (radio buttons)
				fieldName === 'lookingForAJob' &&
				typeof value === 'boolean'
			) {
				// setting boolean value
				state.lookingForAJob = value
			}
		},

		setAccountValue(state, { payload }: PayloadAction<SetAccountValueAction>) {
			state.socialAccounts[payload.fieldName] = payload.value || ''
		},

		clearErrorMessage(state) {
			state.updateProfileErrorMessage = null
		},
	},
})

export const profileSettingsActions = profileSettingsSlice.actions

export const selectProfileSettings = (state: RootState) => state.profileSettings
