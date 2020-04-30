import animalData from "/data.js";
import Animal from "/Animal.js";

let animals = animalData.map((animal) => {
    return new Animal (
        animal.name,
        animal.age,
        animal.species,
        animal.height,
        animal.placeOfOrigin
    );
})
console.log(animals);

animals.forEach((animal) => $(".creatures").append(animal.html));
