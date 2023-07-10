import { Navigation } from "./components/navigation";
import { PageRouter } from "./routes";
import { Header } from "./components/header/header.tsx";
import { useAppDispatch, useAppSelector } from "./services/hooks.ts";
import { useEffect } from "react";
import { initializeApp } from "./features/app";
import {Preloader} from "./components/common";
import { AnimatedBg } from "./components/animatedBg/animatedBg.tsx";


export const App = () => {

    console.log('app rendered')

    const isAuth = useAppSelector(state => state.auth.isAuth)
    const initialized = useAppSelector(state => state.app.initialized)

    const dispatch = useAppDispatch()

    useEffect(() => { dispatch(initializeApp()) }, [dispatch]);

    if (!initialized) return <Preloader />

    return (
        <div>
            <AnimatedBg />
            { isAuth || <Header/> }
            <div className='App'>
                <Navigation/>
                <PageRouter/>
            </div>
        </div>
    )
}