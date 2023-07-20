import {createSlice, isAnyOf, PayloadAction} from "@reduxjs/toolkit";
import {dialogsApi} from "../../api/dialogs-api.ts";
import {DialogsResponse, MessageResponseType, SendMessageResponse} from "../../types/api/dialogs-types.ts";
import {RootState} from "../../app/store.ts";
import {requestDialogs, requestMessages} from "./dialogs-thunks.ts";

interface Dialogs {
    isLoading: boolean

    messages: MessageResponseType[]
    dialogs: DialogsResponse[]

    dialogName: string
}

const initialState: Dialogs = {
    isLoading: false,

    messages: [],

    dialogs: [],
    dialogName: ''
}

export const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        setMessages(state, action: PayloadAction<MessageResponseType[]>) {
            state.messages = action.payload
        },

        setDialogs(state, action: PayloadAction<DialogsResponse[]>) {
            state.dialogs = action.payload
        },

        setDialogName(state, action: PayloadAction<string>) {
            state.dialogName = action.payload
        }
    },

    extraReducers: builder => {
        builder.addMatcher(dialogsApi.endpoints.sendMessage.matchFulfilled, (state, { payload }: PayloadAction<SendMessageResponse>) => {
            if (payload.resultCode === 0) state.messages.push(payload.data.message)
        })

        builder.addMatcher(isAnyOf(requestMessages.pending, requestDialogs.pending), (state) => {
            state.isLoading = true
        })

        builder.addMatcher(isAnyOf(requestMessages.fulfilled, requestDialogs.fulfilled),
            (state) => {
            state.isLoading = false
        })
    }
})

export const {
    setMessages,
    setDialogs,
    setDialogName
} = dialogsSlice.actions

export const getMessages = (state: RootState) => state.dialogs.messages
export const getDialogs = (state: RootState) => state.dialogs.dialogs
export const getDialogName = (state: RootState) => state.dialogs.dialogName
export const getDialogsLoading = (state: RootState) => state.dialogs.isLoading