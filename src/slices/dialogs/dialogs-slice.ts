import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/appStore.ts";


interface Dialogs {
    dialogName: string
}

const initialState: Dialogs = {
    dialogName: ''
}

export const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        setDialogName(state, action: PayloadAction<string>) {
            state.dialogName = action.payload
        }
    }
})

export const {
    setDialogName
} = dialogsSlice.actions

export const getDialogName = (state: RootState) => state.dialogs.dialogName