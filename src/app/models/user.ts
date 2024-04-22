type UserAuth = {
    id?: string,
    email: string,
    username: string,
    password: string
}

type UserLogin = {
    email: string,
    password: string
}

export { UserAuth, UserLogin }