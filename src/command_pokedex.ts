import type { State } from "./state.js";

export async function command_pokedex(state: State): Promise<void> {
    const names = Object.keys(state.caughtPokemon);
    if (names.length === 0) {
        console.log("You have not caught any Pokémon yet.");
        return;
    }
    console.log("Your Pokedex:");
    for (const name of names) {
        console.log(` - ${name}`);
    }
}
