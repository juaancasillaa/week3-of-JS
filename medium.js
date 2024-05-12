function distributePizza(totalSlices, numberOfPeople){

    const slicesPerPerson = totalSlices / numberOfPeople;

    const roundedSlices = Math.floor(slicesPerPerson);

    return `Each person gets ${roundedSlices} slices of pizza from our ${totalSlices} slice pizza`;
}

console.log(distributePizza(10 , 6));