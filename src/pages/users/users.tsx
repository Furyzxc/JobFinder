import s from './users.module.css'

// - Components and hoc

import {User} from "../../components/user"
import {Paginator} from "../../components/paginator";
import {Search} from "../../components/search";
import {Div} from "../../components/common/div.tsx";
import {withLoading} from "../../hoc/withLoading.tsx";

// - Actions

import {getUsers} from "../../features/users";
import {useAppSelector} from "../../app/hooks.ts";

// -----------------------


const WeakUsers = () => {
    const users = useAppSelector(getUsers)

    // @ts-ignore
    return (
        <div className={s.users}>
            <div>
                <div>
                    <Search/>
                </div>

                <div className={s.wrapper}>
                    {!users[0] && <Div>Users not found</Div>}
                    <ul className={s.usersList + ' scroll'}>
                        {users?.map(user => (
                            <li key={user.id}>
                                <User {...user} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <Paginator/>
            </div>
        </div>
    )
}

export const Users = withLoading(WeakUsers)