import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonsService } from "../Services/PokemonsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



function _drawAllPokemon() {
    let pokemon = appState.pokemon
    let template = ''
    pokemon.forEach(p => template += Pokemon.allPokemonTemplate(p))
    setHTML('all-pokemon', template)
}

function _drawActivePokemon() {
    let active = appState.activePokemon
    // @ts-ignore
    setHTML('active-pokemon', active.activePokemonTemplate)
}



export class PokemonsController {
    constructor() {
        console.log('poke controller');
        this.getAllPokemon()
        appState.on('pokemon', _drawAllPokemon)
        appState.on('activePokemon', _drawActivePokemon)
    }


    async getAllPokemon() {
        try {
            await pokemonsService.getAllPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async selectPokemon(name) {
        try {
            console.log(name, 'one pokemon');
            await pokemonsService.selectPokemon(name)
            // await pokemonsService.selectPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }


}