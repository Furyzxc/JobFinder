import {useAppDispatch} from "../../app/hooks.ts";
import {useEffect} from "react";
import {DialogsWithLoading} from "./dialogs.tsx";
import {setDialogs} from "../../features/dialogs";
import {useGetDialogsQuery} from "../../api/dialogs-api.ts";
import {withLoginRedirect} from "../../hoc/login-redirect.tsx";

const DialogsContainer = () => {
    const dispatch = useAppDispatch()

    const { isLoading, data, isSuccess } = useGetDialogsQuery()

    useEffect(() => {
        if (isSuccess && data) dispatch(setDialogs(data))
    }, [dispatch, isSuccess, data]);

    return <DialogsWithLoading isLoading={isLoading} />
}

export const DialogsWithRedirect = withLoginRedirect(DialogsContainer)