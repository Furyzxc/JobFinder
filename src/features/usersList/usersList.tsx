import { Div } from "@/shared/ui/div";
import s from "@/pages/users/users.module.css";
import { User } from "@/entities/user";
import { useAppDispatch, useAppSelector } from "@/app/hooks.ts";
import { getUsers, selectUsersLoading } from "@/slices/users";
import React, { useEffect } from "react";
import { getPaginator } from "@/slices/paginator";
import { requestUsers } from "@/slices/users/users-thunks.ts";
import { WithLoading } from "@/shared/hoc/withLoading.tsx";

export const UsersList = React.memo(() => {
    const dispatch = useAppDispatch()

    const isLoading = useAppSelector(selectUsersLoading)

    const users = useAppSelector(getUsers)
    const {page, term, count, friend} = useAppSelector(getPaginator)


    useEffect(() => {
        dispatch(requestUsers({page, count, term, friend}))
    }, [count, dispatch, friend, page, term]);


    return (
        <WithLoading isLoading={isLoading}>
            {!users[0] && <Div>Users not found</Div>}
            <ul className={s.usersList + ' scroll'}>
                {users?.map(user => (
                    <li key={user.id}>
                        <User {...user} />
                    </li>
                ))}
            </ul>
        </WithLoading>
    );
});
