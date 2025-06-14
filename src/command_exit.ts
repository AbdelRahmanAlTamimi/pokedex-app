import { exit } from 'node:process';
import type { State } from './state'

export async function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!");
    state.rl.close();
    state.pokeAPI.closeCache();
    exit(0);
}