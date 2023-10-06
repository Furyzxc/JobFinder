import { Avatar, Stack, Typography } from '@mui/material'
import { ArticleType } from '@/components/news/api/types.ts'

export const Article = ({
	author,
	content,
	publishedAt,
	description,
	urlToImage,
}: ArticleType) => {
	return (
		<Stack spacing={1} direction={'row'} width={'500px'}>
			<Avatar src={urlToImage} sx={{ height: '200px', width: '200px' }} />
			<Stack>
				<Typography sx={{ fontSize: '20px' }}>{author}</Typography>
				<Typography sx={{ fontSize: '12px', color: 'secondary.main' }}>
					{description}
				</Typography>
				<Typography sx={{ fontSize: '12px', color: 'secondary.light' }}>
					{content}
				</Typography>

				<Typography sx={{ fontSize: '12px', color: 'secondary.main' }}>
					{publishedAt}
				</Typography>
			</Stack>
		</Stack>
	)
}
