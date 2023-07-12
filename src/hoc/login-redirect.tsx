import { ComponentType } from "react";
import {useAppSelector} from "../app/hooks.ts";
import {Navigate} from "react-router-dom";

export const withLoginRedirect = <P extends object>(Component: ComponentType<P>): ComponentType<P> => (props) => {
    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (!isAuth) return <Navigate to='/login' />

    return <Component {...props} />
}