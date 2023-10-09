import { SearchField } from '@/shared/ui/searchField'
import { useNewsInput } from '../../model/hooks'

export const NewsInput = () => {
	const bind = useNewsInput()
	return <SearchField placeholder={'Search news'} {...bind} />
}
