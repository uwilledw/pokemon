import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";

// @ts-ignore
const poke = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 5000
})


class PokemonsService {


    async getAllPokemon() {
        const res = await poke.get('pokemon')
        console.log('poke pokemon', res.data);
        appState.pokemon = res.data.results
        console.log(appState.pokemon);
    }

    async selectPokemon(name) {
        const res = await poke.get(`pokemon/${name}`)
        console.log('pokemon 1', res.data)
        // @ts-ignore
        appState.activePokemon = new Pokemon(res.data)
    }

}

export const pokemonsService = new PokemonsService()