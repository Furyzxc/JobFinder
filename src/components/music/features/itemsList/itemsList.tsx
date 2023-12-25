import { Box } from '@mui/material'
import { memo, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebounce } from 'usehooks-ts'
import { Div } from '@/shared/ui/div'
import { useLazySearchMusicQuery } from '@/components/music/api'
import { Album } from '../../entities/album'

export const ItemsList = memo(() => {
	const [searchParams] = useSearchParams()
	const [searchMusic, { data }] = useLazySearchMusicQuery()

	const params = useMemo(
		() => ({
			q: searchParams.get('q') || 'eminem',
			type: 'album',
		}),
		[searchParams]
	)

	const debouncedParams = useDebounce(params, 1000)

	useEffect(() => {
		const shouldMakeAPICall = !!debouncedParams.q

		shouldMakeAPICall && searchMusic(debouncedParams)
	}, [debouncedParams, searchMusic])

	return data && data.albums && data.albums.items[0] ? (
		<Album url={data && data.albums && data.albums.items[0].uri} />
	) : (
		<Box
			sx={{ position: 'relative', zIndex: 0 }}
			className={'noNavigationHeight'}
		>
			<Div>Album not found...</Div>
		</Box>
	)
})
