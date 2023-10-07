import { useAppSelector } from '@/shared/model/hooks/useAppSelector.ts'
import { selectTheme } from '@/components/settings/model'

export const useTheme = () => useAppSelector(selectTheme)
