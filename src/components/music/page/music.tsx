import { WithLoadingAndError } from '@/shared/hoc'
import { ItemsList } from '@/components/music/features/itemsList'
import { useMusic } from '@/components/music/model/hooks.ts'

export const Music = () => {
	const { isLoading, isError } = useMusic()

	return (
		<WithLoadingAndError isLoading={isLoading} isError={isError}>
			<ItemsList />
		</WithLoadingAndError>
	)
}
