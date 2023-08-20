import { ReactNode, Suspense } from 'react'

type PropsType = {
	children: ReactNode
}

export const WithSuspense = ({ children }: PropsType) => {
	return <Suspense>{children}</Suspense>
}
