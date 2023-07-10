// auth-api

export interface RequestLoginBody {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}

export interface AuthMeResponse {
    resultCode: number
    messages: unknown
    data: {
        id: number
        email: string
        login: string
    }
}

export interface LoginResponse {
    resultCode: number
}

// users-api

export interface RequestUsersBody {
    pageSize?: number
    pageNumber?: number
}

export interface FollowRequestBody {
    userId: number
    follow: boolean
}

export interface ToggleFollowResponse {
    resultCode: number
}

export interface UserResData {
    name: string,
    id: number,
    photos: {
        small: null | string
        large: null | string
    }
    status: null | string
    followed: boolean
}

export interface GetUsersResponse {
    items: UserResData[],
    totalCount: number
    error: null | string
}

// profile-api

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

export interface RequestStatusBody {
    status: string
}

export interface StatusCode {
    resultCode: number
}