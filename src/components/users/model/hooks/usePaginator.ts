import { useAppSelector } from '@/shared/model/hooks'
import { selectPaginator } from '../slice.ts'

export const usePaginator = () => {
	return useAppSelector(selectPaginator)
}
