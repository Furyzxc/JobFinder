import { Avatar, Link, Paper, Stack, Typography } from '@mui/material'
import { formatTimeByDate } from '@/components/dialogs/lib/format-time.ts'
import { ArticleType } from '@/components/news/api/types.ts'

export const Article = ({
	published,
	description,
	url,
	title,
	image,
}: Omit<ArticleType, 'id'>) => {
	return (
		<Paper sx={{ mb: '30px' }}>
			<Stack
				spacing={1}
				direction={'row'}
				sx={{ maxWidth: '600px', height: '200px', alignItems: 'center' }}
			>
				<Avatar src={image} sx={{ height: '170px', width: '170px' }} />
				<Stack>
					<Link
						href={url}
						sx={{
							textDecoration: 'none',
							'&:hover': { textDecoration: 'underline' },
						}}
					>
						<Typography sx={{ fontSize: '20px', maxWidth: '180px' }} noWrap>
							{title}
						</Typography>
					</Link>
					<Typography
						variant={'h2'}
						sx={{
							fontSize: '12px',
							color: 'secondary.light',
							letterSpacing: 0.3,
						}}
					>
						{description}
					</Typography>

					<Typography sx={{ fontSize: '12px', color: 'secondary.main' }}>
						{formatTimeByDate(published)}
					</Typography>
				</Stack>
			</Stack>
		</Paper>
	)
}
