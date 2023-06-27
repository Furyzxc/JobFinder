import { instance } from "./api.ts";

export const authApi = {
    authMe() {
        return instance.get('auth/me').then(res => res.data)
    },

    authLogin(email: string, password: string, rememberMe = false, captcha = false) {
        return instance.post('auth/login', {
            email, password, rememberMe, captcha
        }).then(res => res.data)
    }
}