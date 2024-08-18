const superHeros = [] // type never

// correct way to declare array with a type 
const arr1: number[] = []
arr1.push(1, 2)
console.log(arr1);

type User = {
    name: string,
    isActive: boolean
}
const allUsers: User[] = [{ name: "Aupam", isActive: false }]

allUsers.push({
    name: "name2",
    isActive: true
})


const models: number[][] = [
    [3, 4, 5]
]
