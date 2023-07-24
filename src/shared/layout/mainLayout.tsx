import { ReactNode } from "react";
import { useAppSelector } from "@/app/hooks.ts";
import { selectIsAuth } from "@/slices/auth";
import { Header } from "@/shared/ui/header";
import { Navigation } from "@/features/navigation";

interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout = ({children}: MainLayoutProps) => {
    const isAuth = useAppSelector(selectIsAuth)

    return (
        <div>
            {!isAuth && <Header/>}
            <div className='App'>
                <div>
                    <Navigation/>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};