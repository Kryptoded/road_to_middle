export function sum(...args) {
    if (!args.length) {
        throw Error('hui sosi pidor')
    }
    return args.reduce((result, current) => result += current, 0);
}