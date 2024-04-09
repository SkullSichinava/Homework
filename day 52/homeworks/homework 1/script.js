let name = "Luka" 
let surname = "Sichinava"
let age = 16
let residence = "Tbilisi"
let hobby = "Football"

function infoJoin(firstName, lastName, age, residence, hobby) {
    return `${firstName} ${lastName} ${age} ${residence} ${hobby}.`;
}

console.log(infoJoin(firstName, lastName, age, residence, hobby));