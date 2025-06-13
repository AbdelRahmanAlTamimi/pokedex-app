import type { State } from "./state.js"

export async function command_explore(state: State): Promise<void> {
    const location = await state.pokeAPI.fetchLocation(state.argument);
    const pokemons = location.pokemon_encounters.map(encounter => encounter.pokemon.name);

    console.log(`Exploring ${state.argument}...`)
    console.log("Found Pokemon:");

    pokemons.forEach((element, _) => {
        console.log(`- ${element}`);
    });

}