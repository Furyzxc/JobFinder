import s from './users.module.css'
import { UserProps } from "../../components/user";

// - Hooks

import { useAppDispatch } from "../../services/hooks.ts";

// - Components

import { User } from "../../components/user"

// - Actions

import { setCurrentPage } from "../../features/users";
import { withLoading } from "../../hoc/withLoading.tsx";

// -----------------------


export interface UsersProps {
    users: UserProps[],

    pageLength: number
    currentPage: number,
}

const WeakUsers = ({users}: UsersProps) => {

    const dispatch = useAppDispatch()

    const handlePageClick = (pageNumber: number) => dispatch(setCurrentPage(pageNumber))


    const pages = []
    for (let i = 1; i <= 10; i++) pages.push(i)

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

            <div>
                <ul className={s.usersList}>
                    {users?.map(user => (
                        <li key={user.id}>
                            <User {...user} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export const Users = withLoading(WeakUsers)