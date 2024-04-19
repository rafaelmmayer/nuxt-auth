import type {Claim, User} from "~/types";
import axios from "axios";

let user: User | undefined = undefined
let isAuthenticated = false

export function useAuthUser() {
    async function authenticate() {
        const res = await axios.get<Claim[]>('/api/auth/me', { withCredentials: true })

        if (res.data && res.data.length > 0) {
            user = { claims: res.data }
            isAuthenticated = true
        }
    }

    async function signIn() {
        try {
            const res = await axios.post("/api/auth")
            await authenticate()
        } catch (e) {
            console.error(e)
        }
    }

    return {
        user,
        isAuthenticated,
        authenticate,
        signIn
    }
}