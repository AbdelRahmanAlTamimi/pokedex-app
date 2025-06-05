export function cleanInput(input: string): string[] {
    const str = input.split(' ').filter(word => word.length > 0);
    return str;
}

