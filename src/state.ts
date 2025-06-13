import { createInterface, type Interface } from "readline";
import { getCommands } from './commands.js';
import { PokeAPI } from "./pokeapi.js"

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    argument: string
    pokeAPI: PokeAPI;
    nextLocationsURL: string;
    prevLocationsURL: string
}

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex > "
    });

    return {
        rl: rl,
        commands: getCommands(),
        argument: "",
        pokeAPI: new PokeAPI(),
        nextLocationsURL: "",
        prevLocationsURL: "",
    };
}