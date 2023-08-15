import { useAppSelector } from '@/shared/model/hooks'
import { selectUsersState } from '../slice.ts'

export const useUsersState = () => {
	return useAppSelector(selectUsersState)
}
