import { useAppSelector } from '@/shared/model/hooks'

export const useNavigation = () => {
	return useAppSelector((state) => state.siteNavigation)
}
