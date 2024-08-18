// Type aliases 
// type User = {
//     name: string;
//     email: string;
//     age: number;
//     isActive: boolean
// }
// const createUser = (user: User): User => {
//     return {
//         name: "anupam",
//         email: "anu.co@dev",
//         age: 23,
//         isActive: true
//     }
// }


// const newusers = createUser({ name: "anupam", email: "anu.co@dev", age: 23, isActive: true })
// console.log(newusers);

// type User = {
//     readonly _id: string;
//     name: string;
//     email: string;
//     age: number;
//     isActive: boolean
//     creditCard?: number // optional property
// }

// const newUser: User = {
//     _id: "1234",
//     name: "Anupam",
//     email: "anu.co@dev",
//     age: 23,
//     isActive: true
// }

// newUser._id = "ansfsd";

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

let cardDetails: (cardNumber & cardDate & {
    cvv: number,
})

// const cardOne: cardDetails 