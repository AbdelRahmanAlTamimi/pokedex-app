import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

import type { CLICommand } from "./state.js";


export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Get the next page of locations",
            callback: commandMapForward,
        },
        mapb: {
            name: "mapb",
            description: "Get the previous page of locations",
            callback: commandMapBack,
        },
        explore: {
            name: "explore <location_name>",
            description: "It takes the name of a location area as an argument and display a list of all the Pokémon in a given area.",
            callback: commandExplore
        },
        catch: {
            name: "catch <pokemon_name>",
            description: "catch pokemon",
            callback: commandCatch
        },
        inspect: {
            name: "inspect <pokemon_name>",
            description: "inspect exist pokemon",
            callback: commandInspect
        },
        pokedex: {
            name: "pokedex",
            description: "List all caught Pokémon",
            callback: commandPokedex
        }
    };
}