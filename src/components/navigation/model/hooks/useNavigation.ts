import { RootState } from '@/app/appStore.ts'
import { useAppSelector } from '@/shared/model/hooks'

export const useNavigation = () => {
	return useAppSelector((state: RootState) => state.navigation)
}
