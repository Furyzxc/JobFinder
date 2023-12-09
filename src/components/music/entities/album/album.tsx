import { useRef } from 'react'

const view = 'coverart'
const theme = '0'

type PropsType = {
	url?: string
}

export const Album = ({ url }: PropsType) => {
	const ref = useRef(null)

	return (
		<iframe
			ref={ref}
			src={`https://embed.spotify.com/?uri=${url}&view=${view}&theme=${theme}`}
			className={'noNavigationHeight'}
			frameBorder='0'
			allow='encrypted-media'
			allowFullScreen
		/>
	)
}
