import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessageTypes } from "../../pages/dialogs";

interface Dialogs {
    messages: MessageTypes[]
}

const initialState: Dialogs = {
    messages: []
}

export const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        setMessages(state, action: PayloadAction<MessageTypes[]>) {
            state.messages = action.payload
        },

        addMessage(state, action: PayloadAction<MessageTypes>) {
            action.payload && state.messages.push(action.payload)
        }
    }
})

export const {
    setMessages,
    addMessage
} = dialogsSlice.actions