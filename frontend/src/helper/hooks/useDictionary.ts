const removeSpecialCharacters = (input: string) => {
    return input.replace(/[^a-zA-Z0-9_]/g, '').trim();
};

const useDictionary = (key: string = '', defaultValue: string = '') => {

    // return removeSpecialCharacters(key), defaultValue;
    return defaultValue;
};

export default useDictionary;