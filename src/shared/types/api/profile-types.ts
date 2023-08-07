export interface FollowRequestBody {
	userId: number
	follow: boolean
}

export interface ToggleFollowResponse {
	resultCode: number
}

export interface ProfileResponseBody {
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string | null
	fullName: string

	contacts: {
		github: string | null
		vk: string | null
		facebook: string | null
		instagram: string | null
		twitter: string | null
		website: string | null
		youtube: string | null
		mainLink: string | null
	}

	photos: {
		small: string | null
		large: string | null
	}
}

export interface SetStatusRequestBody {
	status: string
}

export interface StatusCode {
	resultCode: number
}
