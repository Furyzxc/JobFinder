import {setError} from "../features/auth";

export const handleError = (dispatch: any, message = "Some error occurred") => {
    dispatch(setError(message));
};