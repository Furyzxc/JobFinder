import { useAppSelector } from '@/shared/model/hooks.ts'
import { selectPaginator, selectUsersState } from './slice.ts'

export const useUsersState = () => {
	return useAppSelector(selectUsersState)
}

export const usePaginator = () => {
	return useAppSelector(selectPaginator)
}
