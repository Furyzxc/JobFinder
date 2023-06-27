import s from './navigation.module.css'
import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <div className={s.navigation}>
            <Link to='/profile'>Profile</Link>
            <Link to='/dialogs'>Dialogs</Link>
            <Link to='/news'>News</Link>
            <Link to='/music'>Music</Link>
            <Link to='/users'>Users</Link>
            <Link to='/settings'>Settings</Link>
        </div>
    )
}