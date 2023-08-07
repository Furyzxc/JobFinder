import { ReactNode } from 'react'
import s from './div.module.css'

interface DivProps {
	children: ReactNode
}

export const Div = ({ children }: DivProps) => {
	return (
		<div className={s.container}>
			<div className={s.new}>{children}</div>
		</div>
	)
}
