import { requestUsers } from "../../features/users/users-thunks.ts";
import { Users, UsersProps } from "./users.tsx";
import { useEffect } from "react";
import { useAppDispatch } from "../../services/hooks.ts";

export const UsersContainer = (props: UsersProps) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(requestUsers({pageNumber: props.currentPage}))
    }, [dispatch, props.currentPage]);

    return (
        <Users {...props}/>
    );
};