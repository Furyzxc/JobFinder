// - Types

import { ProfileProps } from "../components/profile/profile.types.ts";
import { UsersProps } from "../components/usersPage";
import { FriendProfileProps } from "../components/friendProfile";
import { LoginProps } from "../components/login/login.types.ts";

// - Components

import { NotFound } from "../components/notFoundPage";
import { Profile } from "../components/profile";
import { FriendProfile } from "../components/friendProfile";
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

    const login: LoginProps = { ...state.auth }

    const profile: ProfileProps = { ...state.profile }

    const friendProfile: FriendProfileProps = { ...state.friendProfile }

    const users: UsersProps = { ...state.users }


    // --------------------------------------------

    return (
        <Routes>

            <Route path='*' element={<NotFound/>}/>

            <Route path='/login' element={<Login {...login} />}/>

            <Route path='/profile' element={<Profile {...profile} />}/>

            <Route path='/profile/:userId' element={<FriendProfile {...friendProfile} />}/>

            <Route path='/dialogs' element={<Dialogs/>}/>

            <Route path='/users' element={<Users   {...users}/>}/>
        </Routes>
    )
}