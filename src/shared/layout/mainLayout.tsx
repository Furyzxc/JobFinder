import { ReactNode } from "react";
import { useAuth } from "@/shared/model/hooks.ts";
import { Header } from "@/shared/ui/header";
import { Navigation } from "@/features/navigation";

interface MainLayoutProps {
    children: ReactNode
}

export const MainLayout = ({children}: MainLayoutProps) => {
    const isAuth = useAuth()

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