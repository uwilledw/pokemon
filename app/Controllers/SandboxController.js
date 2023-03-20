import { appState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";
import { Pop } from "../Utils/Pop.js";



export class SandboxController {
    constructor() {
        console.log('sandbox controller');
        this.getMyPokemon()
    }

    async getMyPokemon() {
        try {
            await sandboxService.getMyPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }

    }
    async addPokemon() {
        try {
            console.log('adding pokemon');
            await sandboxService.addPokemon()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }




}