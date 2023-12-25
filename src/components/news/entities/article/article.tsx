import {
	ExpandMore as ExpandMoreIc,
	Favorite,
	MoreVert,
	Share,
} from '@mui/icons-material'
import {
	Alert,
	AlertColor,
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Collapse,
	IconButton,
	IconButtonProps,
	Link,
	Snackbar,
	Stack,
	Typography,
	styled,
} from '@mui/material'
import { useState } from 'react'
import { useBoolean, useCopyToClipboard, useImageOnLoad } from 'usehooks-ts'
import { capitalizeFirstLetter } from '@/shared/lib/capitalize-first-letter.ts'
import { formatTime } from '@/shared/lib/format-time.ts'
import { useRandomColor } from '@/shared/model/hooks'
import { ArticleType } from '@/components/news/api/types.ts'
import { cutString } from '@/components/news/lib/cutString.ts'

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { expand, ...other } = props
	return <IconButton {...other} />
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}))

type PropsType = {
	message: string
	severity: AlertColor
	open: boolean
	onClose: () => void
}

const Snack = (props: PropsType) => (
	<Snackbar
		anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
		open={props.open}
		onClose={props.onClose}
		autoHideDuration={1000}
	>
		<Alert severity={props.severity}>{props.message}</Alert>
	</Snackbar>
)

export function Article({
	image,
	title,
	published,
	description,
	category,
	author,
	url,
}: Omit<ArticleType, 'id'>) {
	const [expanded, setExpanded] = useState(false)
	const randomColor = useRandomColor()

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	const { handleImageOnLoad, css } = useImageOnLoad()
	const { value, setFalse, setTrue } = useBoolean(false)
	const { value: open, setFalse: onClose, setTrue: onOpen } = useBoolean(false)

	const [, copyToClip] = useCopyToClipboard()

	const copyLink = () => {
		copyToClip(url)
		setTrue()
	}

	return (
		<Card sx={{ maxWidth: 345 }}>
			<Snack
				message={'Link copied to clipboard'}
				severity={'success'}
				open={value}
				onClose={setFalse}
			/>
			<Snack
				message={'You like it!'}
				severity={'warning'}
				open={open}
				onClose={onClose}
			/>
			<CardHeader
				avatar={<Avatar sx={{ bgcolor: randomColor }} src={image} />}
				action={
					<IconButton aria-label='settings'>
						<MoreVert />
					</IconButton>
				}
				title={cutString(title)}
				subheader={formatTime(published, 'MMMM DD, YYYY')}
			/>
			<CardMedia
				component='img'
				height='194'
				image={image}
				alt='Article'
				onLoad={handleImageOnLoad}
				sx={css.fullSize}
			/>
			<CardContent>
				<Typography variant='body2' color='text.secondary'>
					{description}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites' onClick={onOpen}>
					<Favorite />
				</IconButton>
				<IconButton aria-label='share' onClick={copyLink}>
					<Share />
				</IconButton>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label='show more'
				>
					<ExpandMoreIc />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<Stack
					direction={'row'}
					spacing={1}
					sx={{ justifyContent: 'center', mb: '5px' }}
				>
					<Link sx={{ fontSize: 14 }}>{author}</Link>
					<Link sx={{ fontSize: 14 }}>
						{category[0] ? capitalizeFirstLetter(category[0]) : ''}
					</Link>
					<Link href={url} sx={{ fontSize: 14 }}>
						Link
					</Link>
				</Stack>
			</Collapse>
		</Card>
	)
}
