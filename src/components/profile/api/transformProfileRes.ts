import { ProfileResponseBody, TransformType } from './types.ts'

// transforming response to desired names
export const transformProfileRes = ({
	fullName: name,
	aboutMe: bio,
	userId,
	lookingForAJob,
	lookingForAJobDescription,
	photos: { small: avatar, large: backgroundImg },
	contacts: { vk: linkedin, mainLink: telegram, ...socialAccounts },
}: TransformType): ProfileResponseBody =>
	({
		name,
		userId,
		bio,
		lookingForAJob,
		lookingForAJobDescription,
		photos: {
			avatar,
			backgroundImg,
		},
		socialAccounts: {
			linkedin,
			telegram,
			...socialAccounts,
		},
	}) as ProfileResponseBody
