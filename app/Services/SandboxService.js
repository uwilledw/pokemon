import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";


// @ts-ignore
const sandbox = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/mick/',
    timeout: 5000
})


class SandboxService {

    async getMyPokemon() {
        const res = await sandbox.get('pokemon')
        console.log('sandbox pokemon', res.data);
        appState.myPokemon = res.data.map(p => new Pokemon(p))
        console.log(appState.myPokemon);
    }


    async addPokemon() {
        const pokemon = appState.activePokemon
        const res = await sandbox.post('pokemon', pokemon)
        console.log(res.data, 'added poke to my sandbox');
    }



}

export const sandboxService = new SandboxService()