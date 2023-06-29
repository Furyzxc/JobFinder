import s from './navigation.module.css'
import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <ul className={s.navigation}>
            <li>
                <Link to='/profile'>Profile</Link>
            </li>
            <li>
                <Link to='/dialogs'>Dialogs</Link>
            </li>
            <li>
                <Link to='/news'>News</Link>
            </li>
            <li>
                <Link to='/music'>Music</Link>
            </li>
            <li>
                <Link to='/users'>Users</Link>
            </li>
            <li>
                <Link to='/settings'>Settings</Link>
            </li>
        </ul>
    )
}