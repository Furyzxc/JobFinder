import { createAsyncThunk } from "@reduxjs/toolkit";
import { dialogsApi } from "./dialogs-api.ts";
import { setDialogs, setMessages } from "./dialogs-slice.ts";
import { MessagesRequest, SendMessageRequest } from "@/shared/types/api/dialogs-types.ts";

export const sendMessage = createAsyncThunk('dialogs/sendMessage',
    async ({userId, body}: SendMessageRequest, {dispatch}) => {
        await dispatch(dialogsApi.endpoints.sendMessage.initiate({userId, body}))
    })

export const requestDialogs = createAsyncThunk('dialogs/requestDialogs',
    async (_, {dispatch}) => {
        await dispatch(dialogsApi.endpoints.requestDialogs.initiate())
            .then(({data}) => data && dispatch(setDialogs(data)))
    })

export const requestMessages = createAsyncThunk('dialogs/requestMessages',
    async ({id, count}: MessagesRequest, {dispatch}) => {
        await dispatch(dialogsApi.endpoints.requestMessages.initiate({id, count}, {forceRefetch: true}))
            .then(({data}) => data && dispatch(setMessages(data.items))
            )
    })