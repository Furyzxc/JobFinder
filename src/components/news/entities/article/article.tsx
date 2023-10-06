import { Avatar, Stack, Typography } from '@mui/material'
import { ArticleType } from '@/components/news/api/types.ts'

export const Article = ({
	author,
	published,
	description,
	image,
}: ArticleType) => {
	return (
		<Stack spacing={1} direction={'row'} width={'500px'}>
			<Avatar src={image} sx={{ height: '200px', width: '200px' }} />
			<Stack>
				<Typography sx={{ fontSize: '20px' }}>{author}</Typography>
				<Typography sx={{ fontSize: '12px', color: 'secondary.main' }}>
					{description}
				</Typography>

				<Typography sx={{ fontSize: '12px', color: 'secondary.main' }}>
					{published}
				</Typography>
			</Stack>
		</Stack>
	)
}
