type Juntadita = {
    _id?: string;
    name: string,
    members?: {
        userId:string,
        username: string,
        role:string
    }[]
}

export default Juntadita;