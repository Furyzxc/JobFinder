import { DialogsResponse, MessageResponseType } from "@/shared/types/api/dialogs-types.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dialogsApi } from "./dialogs-api.ts";
import { requestDialogs, requestMessages } from "./dialogs-thunks.ts";
import { RootState } from "@/app/appStore.ts";


interface Dialogs {
    // special loader for list of chats
    dialogsListLoading: boolean
    isLoading: boolean

    messages: MessageResponseType[]
    dialogs: DialogsResponse[]

    dialogName: string
}

const initialState: Dialogs = {
    dialogsListLoading: false,
    isLoading: false,

    messages: [],

    dialogs: [],
    dialogName: ''
}

export const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        setDialogName(state, action: PayloadAction<string>) {
            state.dialogName = action.payload
        }
    },

    extraReducers: builder => {
        builder.addCase(requestMessages.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(requestMessages.fulfilled,
            (state) => {
                state.isLoading = false
            })

        builder.addCase(requestDialogs.pending, (state) => {
            state.dialogsListLoading = true
        })

        builder.addCase(requestDialogs.fulfilled,
            (state) => {
                state.dialogsListLoading = false
            })

        builder.addMatcher(dialogsApi.endpoints.sendMessage.matchFulfilled, (state, {payload}) => {
            if (payload.resultCode === 0) state.messages.push(payload.data.message)
        })

        builder.addMatcher(dialogsApi.endpoints.requestDialogs.matchFulfilled, (state, {payload}) => {
            state.dialogs = payload
        })

        builder.addMatcher(dialogsApi.endpoints.requestMessages.matchFulfilled, (state, {payload}) => {
            state.messages = payload.items
        })
    }
})

export const {
    setDialogName
} = dialogsSlice.actions

export const getMessages = (state: RootState) => state.dialogs.messages
export const getDialogs = (state: RootState) => state.dialogs.dialogs
export const getDialogName = (state: RootState) => state.dialogs.dialogName
export const getDialogsLoading = (state: RootState) => state.dialogs.isLoading

export const selectDialogsListLoading = (state: RootState) => state.dialogs.dialogsListLoading