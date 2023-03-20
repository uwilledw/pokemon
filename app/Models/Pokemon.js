




export class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.types = data.types
        // [0].type.name
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
    }




    static allPokemonTemplate(pokemon) {
        return `
        <div onclick="app.pokemonsController.selectPokemon('${pokemon.name}')" class="selectable my-3">
        <h5>${pokemon.name}</h5>
        </div>`
    }


    get activePokemonTemplate() {
        if (this.types.length == 1) {
            return `
        <div class="border border-danger border-5 text-center p-2 my-5 sticky-top">
        <h2>${this.name}</h2>
        <p>${this.types[0].type.name}</p>
        <p>Weight: ${this.weight} | Height: ${this.height}</p>
        <button onclick="app.sandboxController.addPokemon()" class="btn btn-danger">ADD</button>
        </div>`
        }
        if (this.types.length == 2) {
            return `
        <div class="border border-danger border-5 text-center p-2 my-5 sticky-top">
        <h2>${this.name}</h2>
        <p>${this.types[0].type.name}</p>
        ${this.typesTemplate}
        <p>${this.types[1].type.name}</p>
        <p>Weight: ${this.weight} | Height: ${this.height}</p>
        <button onclick="app.sandboxController.addPokemon()" class="btn btn-danger">ADD</button>
        </div>`
        }
    }

    get typesTemplate() {
        return `
        <p>${this.types.type.name}</p>
        `
    }
}