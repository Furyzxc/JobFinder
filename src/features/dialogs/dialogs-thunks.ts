import {createAsyncThunk} from "@reduxjs/toolkit";
import {dialogsApi} from "../../api/dialogs-api.ts";
import {SendMessageRequest} from "../../types/api/dialogs-types.ts";

export const sendMessage = createAsyncThunk('dialogs/sendMessage',
    async ({userId, body}: SendMessageRequest, {dispatch} ) => {
    await dispatch(dialogsApi.endpoints.sendMessage.initiate({userId, body}))
    })