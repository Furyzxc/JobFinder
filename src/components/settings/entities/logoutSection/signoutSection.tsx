import { memo } from 'react'
import { Section } from '../profileSection'
import s from './btn.module.css'

type PropsType = {
	signoutFromAccount: () => void
}

export const SignoutSection = memo(({ signoutFromAccount }: PropsType) => {
	const handleClick = () => signoutFromAccount()

	return (
		<Section
			name={'Sign out'}
			paragraphFont={'20px'}
			paragraphColor={'#F85149'}
			paragraphPL={'4px'}
		>
			<summary
				data-view-component='true'
				className={s.btn}
				role='button'
				onClick={handleClick}
			>
				Sign out from account
			</summary>
		</Section>
	)
})
