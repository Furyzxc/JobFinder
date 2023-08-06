import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "app/appStore.ts";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { rootActions } from "@/shared/model/rootActions.ts";
import { selectIsAuth } from "@/slices/auth";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useUserIdFromParams = (id?: number | null) => {
    // if no user id in url returns id from parameters and sets isOwner on true

    const {userId = id} = useParams()

    return {
        id: Number(userId),
        isOwner: userId === id
    }
}

export const useActions = () => {
    const dispatch = useAppDispatch()

    return useMemo(() =>
        bindActionCreators(rootActions, dispatch), [dispatch])
}

export const useAuth = () => {
    return useAppSelector(selectIsAuth)
}