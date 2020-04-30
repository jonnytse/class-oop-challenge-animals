export default class Animal {
    constructor(
        name,
        age, 
        species, 
        height, 
        placeOfOrigin
    ) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.height = height;
        this.placeOfOrigin = placeOfOrigin;
    }

    get description() {
        return `This ${this.species} is aged ${this.age} years old and comes from ${this.placeOfOrigin}`;
    }

    get html() {
        return `<h2>${this.name}</h2>
        <p>${this.description}</p>
        <p>is ${this.height} cm tall</p>`;
    }; 

}