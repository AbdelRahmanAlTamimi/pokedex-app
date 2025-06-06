import { exit } from 'node:process';
import type { State } from './state'

export function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!");
    state.rl.close()
    exit(0);
}