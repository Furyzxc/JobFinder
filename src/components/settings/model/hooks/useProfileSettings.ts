import { useAppSelector } from '@/shared/model/hooks'
import { selectProfileSettings } from '@/components/settings/model/slices/accountSlice.ts'

export const useProfileSettings = () => useAppSelector(selectProfileSettings)
