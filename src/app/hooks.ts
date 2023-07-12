import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store.ts";
import {useParams} from "react-router-dom";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useUserIdFromParams = (id?: number) => {

    const { userId = id } = useParams()
    return Number(userId)
}