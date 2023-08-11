import { setError } from '@/components/authorization'

export const handleError = (dispatch: any, message = 'Some error occurred') => {
	dispatch(setError(message))
}
