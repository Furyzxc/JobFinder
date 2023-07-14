import {useAppDispatch} from "../../app/hooks.ts";
import {useEffect} from "react";
import { DialogsWithRedirect} from "./dialogs.tsx";
import {setDialogs} from "../../features/dialogs";
import {useGetDialogsQuery} from "../../api/dialogs-api.ts";

export const DialogsContainer = () => {
    const dispatch = useAppDispatch()

    const { isLoading, data, isSuccess } = useGetDialogsQuery()

    useEffect(() => {
        if (isSuccess && data) dispatch(setDialogs(data))
    }, [dispatch, isSuccess, data]);

    // @ts-ignore
    return <DialogsWithRedirect isLoading={isLoading} />
}