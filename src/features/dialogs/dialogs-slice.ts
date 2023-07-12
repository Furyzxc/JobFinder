import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {dialogsApi} from "../../api/dialogs-api.ts";
import {GetDialogsResponse, MessageResponseType, SendMessageResponse} from "../../types/api/dialogs-types.ts";
import {RootState} from "../../app/store.ts";

interface Dialogs {
    messages: MessageResponseType[]
    dialogs: GetDialogsResponse[]

    dialogName: string
}

const initialState: Dialogs = {
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

        setDialogs(state, action: PayloadAction<GetDialogsResponse[]>) {
            state.dialogs = action.payload
        },

        setDialogName(state, action: PayloadAction<string>) {
            state.dialogName = action.payload
        }
    },

    extraReducers: builder => {
        builder.addMatcher(dialogsApi.endpoints.sendMessage.matchFulfilled, (state, { payload }: PayloadAction<SendMessageResponse>) => {
            if (payload.resultCode === 0) state.messages.push(payload.data.message)
            console.log(state.messages)
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