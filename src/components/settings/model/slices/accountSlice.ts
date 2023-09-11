import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/app/appStore.ts'
import { ProfileResponseBody, SocialAccounts } from '@/components/profile'
import { api } from '../../api/api.ts'

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

type MainFieldType = 'name' | 'bio' | 'lookingForAJobDescription'

type SetMainValueAction =
	| {
			fieldName: MainFieldType
			value: string
	  }
	| {
			fieldName: 'lookingForAJob'
			value: boolean
	  }

export type SocialAccountType = keyof SocialAccounts

type SetAccountValueAction = {
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
			// @ts-ignore
			state[fieldName] = value
		},

		setAccountValue(state, { payload }: PayloadAction<SetAccountValueAction>) {
			state.socialAccounts[payload.fieldName] = payload.value || ''
		},

		clearErrorMessage(state) {
			state.updateProfileErrorMessage = null
		},
	},

	extraReducers: builder => {
		const { editProfileInfo } = api.endpoints

		builder
			.addMatcher(editProfileInfo.matchPending, state => {
				// sending new request we clear errors
				state.updateProfileErrorMessage = null
			})
			.addMatcher(editProfileInfo.matchFulfilled, (state, action) => {
				const error = action.payload.messages[0]
				// if response consist error we set it to state
				if (error) {
					state.updateProfileErrorMessage = error
				}
			})
			.addMatcher(editProfileInfo.matchRejected, state => {
				// if rejected, set error
				state.updateProfileErrorMessage = 'Some error occured...'
			})
	},
})

export const profileSettingsActions = profileSettingsSlice.actions

export const selectProfileSettings = (state: RootState) => state.profileSettings
