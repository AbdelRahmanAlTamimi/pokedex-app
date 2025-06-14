import type { State } from "./state.js"

export async function commandExplore(state: State, ...args: string[]): Promise<void> {
    if (args.length !== 1) {
        throw new Error("you must provide a location name");
    }

    const name = args[0];
    const location = await state.pokeAPI.fetchLocation(name);
    const pokemons = location.pokemon_encounters.map(encounter => encounter.pokemon.name);

    console.log(`Exploring ${name}...`);
    console.log("Found Pokemon:");

    pokemons.forEach((element) => {
        console.log(`- ${element}`);
    });
}