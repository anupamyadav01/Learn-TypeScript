let score: number | string = 33;

score = 'thirtythree'

type User = {
    name: string,
    id: number
}
type Admin = {
    userName: string,
    id: number
}

const anupam: User | Admin = {
    userName: "Anupam",
    id: 211
}

// let getId: (id: number | string) => {
//     return {

//     }
// }

// getId(1231);