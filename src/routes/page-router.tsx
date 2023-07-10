// - Types

import { UsersTypes } from "../features/users";
import { ProfileProps } from "../pages/profile";
import { LoginProps } from "../pages/login";
import { DialogsProps } from '../pages/dialogs'

// - Components

import { NotFound } from "../pages/notFound";
import { Login } from "../pages/login";
import { ProfileContainer } from "../pages/profile";
import { DialogsWithRedirect } from "../pages/dialogs";
import { UsersContainer } from "../pages/users";

// - Hooks

import { useAppSelector } from "../services/hooks.ts";

// - Libraries

import { Route, Routes } from "react-router-dom";


export const PageRouter = () => {

    const state = useAppSelector(state => state)


    // - Props

    const login: LoginProps = {
        ...state.auth
    }

    const profile: ProfileProps = {
        ...state.profile,
    }

    const users: UsersTypes = {
        ...state.users
    }

    const dialogs: DialogsProps = {
        ...state.dialogs
    }


    return (
        <Routes>
            <Route path='*' element={<NotFound />}/>

            <Route path='/login' element={<Login {...login} />}/>

            <Route path='/profile/:userId?' element={<ProfileContainer { ...profile} />}/>

            <Route path='/dialogs' element={<DialogsWithRedirect { ...dialogs} />}/>

            <Route path='/users' element={<UsersContainer {...users}/>}/>
        </Routes>
    )
}