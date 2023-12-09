import { memo, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { WithLoadingAndError } from '@/shared/hoc'
import { useLazySearchMusicQuery } from '@/components/music/api'
import { Album } from '../../entities/album'

export const ItemsList = memo(() => {
	const [searchParams] = useSearchParams()
	const [searchMusic, { data, isLoading, isError }] = useLazySearchMusicQuery()

	const params = useMemo(
		() => ({
			q: searchParams.get('q') || 'eminem',
			type: 'album',
		}),
		[searchParams],
	)

	useEffect(() => {

		const shouldMakeAPICall = !!params.q

		shouldMakeAPICall && searchMusic(params)
	}, [params, searchMusic])

	return (
		<WithLoadingAndError isLoading={isLoading} isError={isError}>
			<Album url={data && data.albums && data.albums.items[0].uri} />
		</WithLoadingAndError>
	)
})
