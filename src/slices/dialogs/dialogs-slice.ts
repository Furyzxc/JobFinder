import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@/app/appStore.ts'
import { dialogsApi } from '@/slices/dialogs/dialogs-api.ts'

interface Dialogs {
	isError: boolean
	dialogName: string
}

const initialState: Dialogs = {
	isError: false,
	dialogName: '',
}

export const dialogsSlice = createSlice({
	name: 'dialogs',
	initialState,
	reducers: {
		setDialogName(state, action: PayloadAction<string>) {
			state.dialogName = action.payload
		},
	},

	extraReducers: builder => {
		const { requestDialogs } = dialogsApi.endpoints

		builder.addMatcher(requestDialogs.matchPending, state => {
			state.isError = false
		})

		builder.addMatcher(requestDialogs.matchFulfilled, state => {
			state.isError = false
		})

		builder.addMatcher(requestDialogs.matchRejected, state => {
			state.isError = true
		})
	},
})

export const dialogsActions = dialogsSlice.actions

export const getDialogName = (state: RootState) => state.dialogs.dialogName
export const selectDialogsError = (state: RootState) => state.dialogs.isError
