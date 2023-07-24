import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./appStore.ts";
import {useParams} from "react-router-dom";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useUserIdFromParams = (id?: number | null) => {

    const {userId = id } = useParams()
    return {
        id: Number(userId),
        isOwner: userId === id
    }
}