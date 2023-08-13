import { useAppSelector } from '@/shared/model/hooks.ts'
import { selectProfileSettings } from '../slice.ts'

export const useProfileSettings = () => useAppSelector(selectProfileSettings)
