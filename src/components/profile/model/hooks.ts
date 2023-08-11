import { useAppSelector } from '@/shared/model/hooks.ts'
import { selectProfile } from '@/components/profile/model/slice.ts'

export const useProfile = () => {
	return useAppSelector(selectProfile)
}
