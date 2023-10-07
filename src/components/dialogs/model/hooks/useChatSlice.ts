import { useAppSelector } from '@/shared/model/hooks'

export const useChatSlice = () => {
	return useAppSelector((state) => state.chat)
}
