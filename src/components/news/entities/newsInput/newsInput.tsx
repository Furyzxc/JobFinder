import { Input } from '@/shared/ui/input'
import { useNewsInput } from '../../model/hooks'

export const NewsInput = () => {
	const bind = useNewsInput()
	return (
		<Input
			{...bind}
			name={'search news'}
			placeholder={'Search news'}
			autoComplete={'off'}
			width={'100%'}
		/>
	)
}
