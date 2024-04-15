export function get(obj, keys, defaultValue) {
    const keyArr = keys.split('.');
    let result = obj;
    keyArr.forEach(key => {
        result = result[key]
        if (result === undefined) {
            return defaultValue
        }
    });
    return result ?? defaultValue;
}