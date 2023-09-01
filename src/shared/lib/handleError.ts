import { setError } from '@/components/authorization/model'

export const handleError = (dispatch: any, message = 'Some error occurred') =>
	dispatch(setError(message))
