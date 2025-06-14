import { createInterface, type Interface } from "readline";
import { getCommands } from './commands.js';
import { PokeAPI } from "./pokeapi.js";
import type { Pokemon } from "./pokeapi.js";


export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    argument: string
    pokeAPI: PokeAPI;
    nextLocationsURL: string;
    prevLocationsURL: string;
    caughtPokemon: Record<string, Pokemon>;
}

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(cacheInterval: number) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex > "
    });

    return {
        rl: rl,
        commands: getCommands(),
        argument: "",
        pokeAPI: new PokeAPI(cacheInterval),
        nextLocationsURL: "",
        prevLocationsURL: "",
        caughtPokemon: {},
    };
}