import { ReactNode, Suspense } from 'react'
import { Preloader } from '@/shared/ui/preloader'

type PropsType = {
	children: ReactNode
}

export const WithSuspense = ({ children }: PropsType) => {
	return <Suspense fallback={<Preloader />}>{children}</Suspense>
}
