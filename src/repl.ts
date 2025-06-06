import type { State } from "./state"

export function cleanInput(input: string): string[] {
    return input.split(' ').filter(word => word.length > 0);
}

export function startREPL(state: State) {


    state.rl.prompt();

    state.rl.on('line', (line: string) => {
        const words = cleanInput(line);

        if (words.length === 0) {
            state.rl.prompt();
            return;
        }

        const commandName = words[0];
        const command = state.commands[commandName];

        if (command) {
            try {
                command.callback(state);
            } catch (err) {
                console.error(`Error: ${(err as Error).message}`);
            }
        } else {
            console.log("Unknown command");
        }

        state.rl.prompt();

    });
}
