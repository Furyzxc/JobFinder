import s from './header.module.css'

import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <Link to='/login' className={s.button}>
        </Link>

    )
}