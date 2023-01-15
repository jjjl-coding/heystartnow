export  function getRandomNumber () {
    const array = [];
    for(let i=0; i<3; i++) {
        array.push(getSpareNumber(array))
    }
    return array
}

 function getSpareNumber(array){
    const randomNuber = Math.floor(Math.random()*10)
    if(array.includes(randomNuber))
    {
        return getSpareNumber(array)
    }
    return randomNuber
}
