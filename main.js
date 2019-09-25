console.log('Pet Adoption')


//Array for pets

const pets = [
    {
    image: './images/Redd.jpeg',
    name: 'Redd',
    color: 'red and white',
    specialSkill: 'Looking Regal',
    typeOfPet: 'Dog',
    },
    {
    image: './images/Oliver.jpeg',
    name: 'Oliver',
    color: 'Black',
    specialSkill: 'Meowwwing',
    typeOfPet: 'Cat',
    },
    {
    image: './images/Rusty.jpeg',
    name: 'Rusty',
    color: 'Red',
    specialSkill: 'Laying Eggs',
    typeOfPet: 'Chicken',
    },
    {
    image: './images/Maddie.jpeg',
    name: 'Maddie',
    color: 'Black and Tan',
    specialSkill: 'Cuddling',
    typeOfPet: 'Cat',
    },
    {
    image: './images/penny.jpeg',
    name: 'Penny',
    color: 'Black and White',
    specialSkill: 'Laying Eggs',
    typeOfPet: 'Chicken',
    },
    {
    image: './images/Fern.jpeg',
    name: 'Fern',
    color: 'Black and White',
    specialSkill: 'Being Needy',
    typeOfPet: 'Dog',
    },
    {
    image: './images/Rocky.jpeg',
    name: 'Rocky',
    color: 'Grey',
    specialSkill: 'Pooping while Standing',
    typeOfPet: 'Cat',
    },
];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
};

const petAdopter = (petsArray) => {
    let domString = '';
    for (let i = 0; i < petsArray.length; i++) {
        const pets = petsArray[i];
        domString += `
        <div class="card ${pets.typeOfPet}">
            <h2>${pets.name}</h2>
            <img src=${pets.image} alt='Image of ${pets.name}' />
            <p>color: ${pets.color}</p>
            <p>Special power: ${pets.specialSkill}</p>
            <footer>${pets.typeOfPet}</footer>

        </div>
        `
        
    };
    printToDom(domString, 'pet-zone')
};

const buttonClick = (e) => {
    const typeOfPet = e.target.id;
    console.log(typeOfPet)
    const selectedPet = [];
    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i];
        if (pet.typeOfPet === typeOfPet) {
            selectedPet.push(pet);
        };
        
    };
    if (typeOfPet === 'all') {

        petAdopter(pets);
        
    } else {
        console.log(selectedPet)
        petAdopter(selectedPet)
    };
};


    
petAdopter(pets);
   
document.getElementById('Dog').addEventListener('click', buttonClick);
document.getElementById('Cat').addEventListener('click', buttonClick);
document.getElementById('Chicken').addEventListener('click', buttonClick);
document.getElementById('all').addEventListener('click', buttonClick);