const router = createRouter();

router.use("/auth", defineEventHandler(async (event) => {
    if (event.method === "POST") {
        const claims = [
            {
                "type": "id",
                "value": "bdaa8e5c-a259-4dcf-a02b-8164631f6711"
            },
            {
                "type": "email",
                "value": "rafa.mayer67@gmail.com"
            },
            {
                "type": "name",
                "value": "Rafael Mayer"
            },
            {
                "type": "college",
                "value": "PUC"
            }
        ]

        setCookie(event, '.cookie', JSON.stringify(claims))

        return;
    }
}))

router.use("/auth/me", defineEventHandler(async (event) => {
    if (event.method === "GET") {
        const tokenCookie = getCookie(event, '.cookie')

        if (!tokenCookie) {
            return []
        }

        return JSON.parse(tokenCookie)
    }
}))

export default useBase('/api', router.handler);

