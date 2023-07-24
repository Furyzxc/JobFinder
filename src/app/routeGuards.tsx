import { useAppSelector } from "./hooks.ts";
import { selectIsAuth } from "@/slices/auth";
import { Navigate } from "react-router-dom";
import React, { ReactNode } from "react";

type GuestGuardProps = {
    children: ReactNode
}


// Component to guard routes accessible only to guests (non-authenticated users)
export const GuestGuard = ({children}: GuestGuardProps) => {
    const isAuthorized = useAppSelector(selectIsAuth)

    if (!isAuthorized) return <Navigate to="/login"/>

    return <React.Fragment>{children}</React.Fragment>;
}

type AuthGuardProps = {
    children: ReactNode
}

// Component to guard routes accessible only to authenticated users
export const AuthGuard = ({children}: AuthGuardProps) => {
    const isAuthorized = useAppSelector(selectIsAuth)

    if (isAuthorized) return <Navigate to="/"/>

    return <React.Fragment>{children}</React.Fragment>;
}