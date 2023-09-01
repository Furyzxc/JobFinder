import { useAppSelector } from '@/shared/model/hooks'

export const useChat = () => useAppSelector(state => state.chat)
