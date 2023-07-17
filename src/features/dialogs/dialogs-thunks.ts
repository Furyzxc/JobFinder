import {createAsyncThunk} from "@reduxjs/toolkit";
import {dialogsApi} from "../../api/dialogs-api.ts";
import {MessagesRequest, SendMessageRequest} from "../../types/api/dialogs-types.ts";
import {setMessages} from "./dialogs-slice.ts";

export const sendMessage = createAsyncThunk('dialogs/sendMessage',
    async ({userId, body}: SendMessageRequest, {dispatch} ) => {
    await dispatch(dialogsApi.endpoints.sendMessage.initiate({userId, body}))
    })

export const requestMessages = createAsyncThunk('dialogs/requestMessages',
    async ({id, count}: MessagesRequest, { dispatch }) => {
    await dispatch(dialogsApi.endpoints.requestMessages.initiate({id, count}))
        .then(({data}) => data && dispatch(setMessages(data.items))
    )
    })