import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { rootActions } from '@/app/rootActions.ts'
import { useAppDispatch } from './useAppDispatch.ts'

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
