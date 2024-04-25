type UserRegister = {
    id?: string,
    email: string,
    username: string,
    password: string
}

type UserLogin = {
    id?: string,
    email: string,
    password: string,
    token?: string,
}

type UserAuth = {
    id: string,
    token: string
}

export { UserRegister, UserLogin, UserAuth }