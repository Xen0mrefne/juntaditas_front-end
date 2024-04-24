type UserRegister = {
    id?: string,
    email: string,
    username: string,
    password: string
}

type UserLogin = {
    email: string,
    password: string,
    token?: string
}

export { UserRegister, UserLogin }