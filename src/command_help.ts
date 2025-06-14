import type { State } from "./state.js"

export async function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!\nUsage: ")
    for (const key in state.commands) {
        const cmd = state.commands[key];
        console.log(`${key}: ${cmd.description}`)
    }
}