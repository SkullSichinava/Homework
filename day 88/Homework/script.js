const people = [
    { name: 'Mamuka', age: 48 },
    { name: 'Fatima', age: 45 },
    { name: 'Saba', age: 6 }
  ]
people.forEach(people  => console.log(people.name))



const obj = {
     a: 15, 
     b: 23, 
     c: 40, 
}
for (const y in obj) {
    if (obj.hasOwnProperty(y)) {
        console.log(`${y}: ${obj[y]}`);
    }
}


const Array = [1, 4, 13, 34, 59]
for (const x of Array) {
    console.log(x);
}