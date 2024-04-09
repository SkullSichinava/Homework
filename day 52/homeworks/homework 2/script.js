function ageCheck(age){
        if (age > 18 ){
            console.log(`${age} is greater than 18.`)
        }
        else if (age < 18){
            console.log(`${age} is lower than 18.`);
        }
        else {
            console.log(`${age} is equal than 18.`);
        }
}

ageCheck(20);
ageCheck(16)
ageCheck(18)