type Member = {
    userId:string,
    username: string,
    role:string
}

type Juntadita = {
    _id?: string;
    name: string,
    members?: Member[]
}

export default Juntadita;