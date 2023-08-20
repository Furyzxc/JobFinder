import { ReactNode } from 'react'
import { WithError } from './withError.tsx'
import { WithLoading } from './withLoading.tsx'

type PropsType = {
	children: ReactNode
	isLoading: boolean
	isError: boolean
}

export const WithLoadingAndError = ({
	children,
	isLoading,
	isError,
}: PropsType) => {
	return (
		<WithLoading isLoading={isLoading}>
			<WithError isError={isError}>{children}</WithError>
		</WithLoading>
	)
}
