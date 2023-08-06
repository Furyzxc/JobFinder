import { dialogsActions } from "@/slices/dialogs";
import { profileActions } from "@/slices/profile";
import { paginatorActions } from "@/slices/paginator";

export const rootActions = {
    ...dialogsActions,
    ...profileActions,
    ...paginatorActions
}