import { commandExit } from "./command_exit.js";
import { command_help } from "./command_help.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import { command_explore } from "./command_explore.js";

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
            callback: command_help,
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
            callback: command_explore
        }
    };
}