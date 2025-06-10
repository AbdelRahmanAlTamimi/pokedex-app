import type { State } from "./state.js"

export async function command_help(state: State) {
    console.log("Welcome to the Pokedex!\nUsage: ")
    for (const key in state.commands) {
        const cmd = state.commands[key];
        console.log(`${key}: ${cmd.description}`)
    }
}