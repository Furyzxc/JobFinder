import s from './users.module.css'
import { UserProps } from "../user";

// - Hooks

import { useAppDispatch } from "../../app/hooks.ts";
import { useEffect } from "react";

// - Components

import { Preloader } from "../common";
import { User } from "../user"

// - Actions

import { fetchUsers } from "../../features/users";

// -----------------------


export interface UsersProps {
    isFetching: boolean,

    users: UserProps[],

    pageLength: number
    currentPage: number,
    totalCount: null | number
}

export const Users = (props: UsersProps) => {

    const dispatch = useAppDispatch()

    const handlePageClick = (pageNumber: number) => dispatch(fetchUsers({pageNumber}))


    useEffect(() => { dispatch(fetchUsers({})) }, [dispatch])


    const pages = []
    for (let i = 1; i <= 10; i++) pages.push(i)

    if (props.isFetching) return <Preloader />

    return (
        <div className={s.users}>
            <div className={s.pages}>
                {pages.map(page => (
                    <div key={page}
                         className={s.page}
                         onClick={() => handlePageClick(page)}
                    > {page} </div>
                ))}
            </div>

            <div className={s.usersArea}>
                {props.users?.map(user => <User key={user.id} {...user} />)}
            </div>
        </div>
    )
}