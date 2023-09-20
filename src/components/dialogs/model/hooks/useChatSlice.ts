import { RootState } from '@/app/appStore.ts'
import { useAppSelector } from '@/shared/model/hooks'

export const useChatSlice = () => {
	return useAppSelector((state: RootState) => state.chat)
}
