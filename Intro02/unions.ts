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

// unions with array 
const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const data2: string[] = ["anupam", "dev"]

// either number or string

const data3: (string | number)[] = ["anupam", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// for stricty typing

let pi: 3.14 = 3.14; // we cannot change it further in future

// example 

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle" // we can change it
seatAllotment = "window"

// but

// seatAllotment = "center" // we cannot change it
