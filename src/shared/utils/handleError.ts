import { setError } from "@/slices/auth";

export const handleError = (dispatch: any, message = "Some error occurred") => {
    dispatch(setError(message));
};