import { useEffect } from 'react'
import { useActions } from '@/shared/model/hooks.ts'
import { DescriptionSection } from '@/entities/profileDescription'
import { Status } from '@/entities/status'
import { useGetProfileQuery } from '@/slices/profile'
import s from './profileInfo.module.css'

type PropsType = {
	isOwner: boolean
	id: number
}

export const ProfileInfo = ({ id, isOwner }: PropsType) => {
	const { setProfileName, setAvatar } = useActions()

	const { data, isSuccess } = useGetProfileQuery(id)

	useEffect(() => {
		if (isSuccess && data) {
			setProfileName(data.fullName)
			setAvatar(data.photos.small)
		}
	}, [data, isSuccess, setAvatar, setProfileName])

	return (
		<div className={s.userInfo}>
			<div className={s.main}>
				<div className={s.nickName}>{data?.fullName}</div>
				<div className={s.status}>
					<Status isOwner={isOwner} userId={id} />
				</div>
			</div>
			{data && <DescriptionSection {...data} />}
		</div>
	)
}
