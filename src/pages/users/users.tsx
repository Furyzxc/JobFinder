import s from './users.module.css'

// - Components

import { User } from "../../components/user"

// - Actions

import { getUsers} from "../../features/users";
import { withLoading } from "../../hoc/withLoading.tsx";
import {Search} from "../../components/search";
import {Div} from "../../components/common/div.tsx";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {getPages, setPage} from "../../features/paginator/paginator-slice.ts";

// -----------------------


const WeakUsers = () => {
    const dispatch = useAppDispatch()

    const users = useAppSelector(getUsers)
    const pages = useAppSelector(getPages)
    const handlePageClick = (pageNumber: number) => dispatch(setPage(pageNumber))


    return (
        <div className={s.users}>
            <div>
                <Search />
            </div>

            {!users[0] && <Div>Users not found</Div>}

            <div>
                <ul className={s.usersList}>
                    {users?.map(user => (
                        <li key={user.id}>
                            <User {...user} />
                        </li>
                    ))}
                </ul>
            </div>

            <div className={s.pages}>
                {pages.map(page => (
                    <div key={page}
                         className={s.page}
                         onClick={() => handlePageClick(page)}
                    > {page} </div>
                ))}
            </div>
        </div>
    )
}

export const Users = withLoading(WeakUsers)