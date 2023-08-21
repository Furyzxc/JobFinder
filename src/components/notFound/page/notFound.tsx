import { useNavigate } from 'react-router-dom'
import { useSmoothAppearance } from '@/shared/model/hooks'
import s from './notFound.module.css'

export const NotFound = () => {
	const navigate = useNavigate()

	const { ref } = useSmoothAppearance()
	const handleGoToHmPageClick = () => navigate('/profile')

	return (
		<div className={s.box} ref={ref}>
			<div className={s.notfound}>
				<div className={s.notfound404}>
					<h1>Oops!</h1>
				</div>
				<h2>404 - Page not found</h2>
				<p>
					The page you are looking for might have been removed had its name
					changed or is temporarily unavailable.
				</p>
				<button onClick={handleGoToHmPageClick}>Go To Homepage</button>
			</div>
		</div>
	)
}
