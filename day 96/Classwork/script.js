const realMapping = new Map([
    // cvladi // mnishvneloba
    ["name", "Saba"],
    ["name1","Luka"],
    ["name2", "Nika"]
])
const myObj = {
    name: "Luka",
    name1: "Saba"
}
console.log(realMapping.get("name"))


const personInfo = new Map([
    ["name", "luka"],
    ["surname","Sichinava"],
    ["age", 17]
])
console.log(personInfo)

let list = [1,1,1,1,1,1,2 ,3,4,5,7,7,7,7,9,9]
let newList = [...new Set(list)]
console.log(newList)