import { ReactNode } from 'react'
import { Div } from '@/shared/ui/div'

type PropsType = {
	children: ReactNode
	isError: boolean
}

export const WithError = ({ children, isError }: PropsType) => {
	if (isError) {
		return <Div>Something went wrong during loading!</Div>
	}

	return <>{children}</>
}
