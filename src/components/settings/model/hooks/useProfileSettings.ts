import { useAppSelector } from '@/shared/model/hooks'
import { selectProfileSettings } from '../slice.ts'

export const useProfileSettings = () => useAppSelector(selectProfileSettings)
