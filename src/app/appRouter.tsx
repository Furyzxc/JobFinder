import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "@/pages/notFound";
import { Profile } from "@/pages/profile";
import { Login } from "@/pages/login";
import { Dialogs } from "@/pages/dialogs";
import { Users } from "@/pages/users";
import { AuthGuard, GuestGuard } from "./routeGuards.tsx";
import { MainLayout } from "../shared/layout/mainLayout.tsx";

export const appRouter = createBrowserRouter([
    {
        path: '*', element: (
            <MainLayout>
                <NotFound/>
            </MainLayout>
        )
    },
    {
        path: '/', element: (
            <MainLayout>
                <GuestGuard>
                    <Profile/>
                </GuestGuard>
            </MainLayout>
        )
    },
    {
        path: '/login', element: (
            <MainLayout>
                <AuthGuard>
                    <Login/>
                </AuthGuard>
            </MainLayout>
        )
    },
    {
        path: '/profile/:userId?', element: (
            <MainLayout>
                <GuestGuard>
                    <Profile/>
                </GuestGuard>
            </MainLayout>
        )
    },
    {
        path: '/dialogs/:userId?', element: (
            <MainLayout>
                <GuestGuard>
                    <Dialogs/>
                </GuestGuard>
            </MainLayout>
        )
    },
    {
        path: '/users', element: (
            <MainLayout>
                <Users />
            </MainLayout>
        )
    }
])