import { bindActionCreators } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from 'app/appStore.ts'
import dayjs from 'dayjs'
import {
	Dispatch,
	SetStateAction,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { rootActions } from '@/shared/model/rootActions.ts'
import { MessageResponseType } from '@/shared/types/api/dialogs-types.ts'
import { selectIsAuth } from '@/slices/auth'
import { selectProfileError, selectProfileLoading } from '@/slices/profile'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface UserIdFromParamsOutput {
	id: number | undefined
	isOwner: boolean
}

export const useUserDetails = (id?: number | null): UserIdFromParamsOutput => {
	// if no user id in url returns id from parameters and sets isOwner on true

	const { userId = id } = useParams()

	return {
		id: userId ? +userId : undefined,
		isOwner: userId === id,
	}
}

export const useActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export const useAuth = () => {
	return useAppSelector(selectIsAuth)
}

interface useOutsideOutput {
	ref: any
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

// Hook that controls displaying of the element after click outside of this element
export const useOutside = (initialIsVisible: boolean): useOutsideOutput => {
	const [isShow, setIsShow] = useState(initialIsVisible)
	const ref = useRef<HTMLElement>(null)

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return document.removeEventListener('click', handleClickOutside, true)
	})

	return { ref, isShow, setIsShow }
}

interface ScrollIntoViewOutput {
	ref: any
}

// hook that navigate scroll to the ref element after updating page
export const useScrollIntoView = (
	messages: MessageResponseType[] | undefined
): ScrollIntoViewOutput => {
	const ref = useRef()

	useEffect(() => {
		// @ts-ignore
		ref.current?.scrollIntoView()
	}, [messages])

	return { ref }
}

// hook for formatting time to 10:48 AM style
export const useFormattedTime = (date: string) => {
	return dayjs(date).format('HH:mm A')
}

interface UseProfileOutput {
	isLoading: boolean
	isError: boolean
}
// gives profile error and loading
export const useProfileLoadingError = (): UseProfileOutput => {
	return {
		isLoading: useAppSelector(selectProfileLoading),
		isError: useAppSelector(selectProfileError),
	}
}
