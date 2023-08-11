import { Follow } from '../../entities/follow'
import s from './btns.module.css'
import { ProfileSendBtn } from '@/components/profile/entities/profileSendBtn/profileSendBtn.tsx'

interface PropsType {
	userId: number
}

export const UserProfileBtns = ({ userId }: PropsType) => {
	return (
		<div className={s.btns}>
			<ProfileSendBtn userId={userId} />
			<Follow userId={userId} />
		</div>
	)
}
