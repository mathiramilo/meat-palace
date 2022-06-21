/* Functions to validate forms. */

/* Returns true if a string contains at least one number,
false otherwise. */
export const containNumbers = (str: string): boolean => {
    const regex = /[0-9]+/;
    return regex.test(str);
}

/* Returns true if a string contains at least one letter,
false otherwise. */
export const containLetters = (str: string): boolean => {
    const regex = /[a-zA-Z]+/;
    return regex.test(str);
}