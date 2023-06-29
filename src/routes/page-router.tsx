// - Types

import { UsersProps } from "../components/usersPage";
import { ProfileProps } from "../components/profile";
import { LoginProps } from "../components/login";

// - Components

import { NotFound } from "../components/notFoundPage";
import { Profile } from "../components/profile";
import { Dialogs } from "../components/dialogs";
import { Users } from "../components/usersPage";
import { Login } from "../components/login";

// - Hooks

import { useAppSelector } from "../app/hooks.ts";

// - Libraries

import { Route, Routes } from "react-router-dom";


export const PageRouter = () => {

    const state = useAppSelector(state => state)


    // - Props
    const isAuth = state.auth.isAuth

    const login: LoginProps = {
        isFetching: state.profile.isFetching,
        isAuth
    }


    const profile: ProfileProps = {
        ...state.profile,
        isAuth
    }

    const users: UsersProps = {
        ...state.users,
        isAuth
    }


    // --------------------------------------------


    return (
        <Routes>

            <Route path='*' element={<NotFound/>}/>

            <Route path='/login' element={<Login {...login}/>}/>

            <Route path='/profile/:userId?' element={<Profile {...profile} />}/>

            <Route path='/dialogs' element={<Dialogs />}/>

            <Route path='/users' element={<Users {...users}/>}/>
        </Routes>
    )
}