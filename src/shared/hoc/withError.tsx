import { ReactNode } from 'react'
import { Div } from '@/shared/ui/div'

type PropsType = {
	children: ReactNode
	isError: boolean
}

export const WithError = ({ children, isError }: PropsType) => {
	if (isError) {
		return <Div>Some error occured...</Div>
	}

	return <>{children}</>
}
