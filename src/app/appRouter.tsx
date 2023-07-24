import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../pages/notFound";
import { ProfileContainer } from "../pages/profile";
import { Login } from "../pages/login";
import { DialogsContainer } from "../pages/dialogs";
import { UsersContainer } from "../pages/users";
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
                    <ProfileContainer/>
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
                    <ProfileContainer/>
                </GuestGuard>
            </MainLayout>
        )
    },
    {
        path: '/dialogs/:userId?', element: (
            <MainLayout>
                <GuestGuard>
                    <DialogsContainer/>
                </GuestGuard>
            </MainLayout>
        )
    },
    {
        path: '/users', element: (
            <MainLayout>
                <UsersContainer/>
            </MainLayout>
        )
    }
])