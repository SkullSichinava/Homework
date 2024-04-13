const car ={
    brand: "Porsche",
    model:  "911 Turbo S",
    year: 2024,
    color: "Dark Blue",
    engine: "3.7-liter flat-six"
}

function carInfo( brand,model,year,color,engine){
    const result = brand + " " + model + " " + year + " " + color + " " + engine;
    return result;
}