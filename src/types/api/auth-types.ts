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
