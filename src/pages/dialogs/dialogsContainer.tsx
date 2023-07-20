import {useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import {useEffect} from "react";
import {DialogsWithLoading} from "./dialogs.tsx";
import {getDialogsLoading, requestDialogs} from "../../features/dialogs";
import {withLoginRedirect} from "../../hoc/login-redirect.tsx";

const DialogsContainer = () => {
    const dispatch = useAppDispatch()

    const isLoading = useAppSelector(getDialogsLoading)

    useEffect(() => {
        dispatch(requestDialogs())
    }, [dispatch]);

    return <DialogsWithLoading isLoading={isLoading} />
}

export const DialogsWithRedirect = withLoginRedirect(DialogsContainer)