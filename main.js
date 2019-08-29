console.log('Pet Adoption')


//Array for pets

const pets = [
    {
    image: './images/Redd.jpeg'
    name: 'Redd'
    color: 'red and white'
    specialSkill: 'Looking Regal'
    typeOfPet: 'Dog'
    },
    {
    image: './images/Oliver.jpeg'
    name: 'Oliver'
    color: 'Black'
    specialSkill: 'Meowwwing'
    typeOfPet: 'Cat'
    },
    {
    image: './images/Rusty.jpeg'
    name: 'Rusty'
    color: 'Red'
    specialSkill: 'Laying Eggs'
    typeOfPet: 'Chicken'
    },
    {
    image: './images/Maddie.jpeg'
    name: 'Maddie'
    color: 'Black and Tan'
    specialSkill: 'Cuddling'
    typeOfPet: 'Cat'
    },
    {
    image: './images/Fern.jpeg'
    name: 'Penny'
    color: 'Black and White'
    specialSkill: 'Laying Eggs'
    typeOfPet: 'Chicken'
    },
    {
    image: './images/Fern.jpeg'
    name: 'Fern'
    color: 'Black and White'
    specialSkill: 'Being Needy'
    typeOfPet: 'Dog'
    },
    {
    image: './images/Rocky.jpeg'
    name: 'Rocky'
    color: 'Grey'
    specialSkill: 'Pooping while Standing'
    typeOfPet: 'Cat'
    },
];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const petAdopter = (petArray) => {
    for (let i = 0; i < petArray.length; i++) {
        const pet = petArray[i]
        const domString = `
        <div class="card">
            <h2>${pet.name}</h2>
            <img src=${pet.image} alt='Image of ${pet.name}' />
        </div>
        `
        printToDom(domString, 'pet-zone')
    }
  }

  petAdopter(pets)