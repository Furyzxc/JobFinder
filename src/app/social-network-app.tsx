import {Navigation} from "../components/navigation";
import {Header} from "../components/header/header.tsx";
import {useAppDispatch, useAppSelector} from "./hooks.ts";
import {useEffect} from "react";
import {getAuth, initializeApp} from "../features/app";
import {Preloader} from "../components/common";
import {AnimatedBg} from "../components/animatedBg/animatedBg.tsx";
import {Route, Routes} from "react-router-dom";
import {NotFound} from "../pages/notFound";
import {Login} from "../pages/login";
import {ProfileContainer} from "../pages/profile";
import {DialogsContainer} from "../pages/dialogs/dialogsContainer.tsx";
import {UsersContainer} from "../pages/users";


export const SocialNetworkApp = () => {

    console.log('app rendered')

    const isAuth = useAppSelector(getAuth)
    const initialized = useAppSelector(state => state.app.initialized)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch]);

    if (!initialized) return <Preloader/>

    return (
        <div>
            <AnimatedBg/>
            {!isAuth && <Header/>}
            <div className='App'>
                <div>
                    <Navigation/>
                </div>
                <div>
                    <Routes>
                        <Route path='*' element={<NotFound/>}/>

                        <Route path='/login' element={<Login/>}/>

                        <Route path='/profile/:userId?' element={<ProfileContainer/>}/>

                        <Route path='/dialogs/:userId?' element={<DialogsContainer/>}/>

                        <Route path='/users' element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}