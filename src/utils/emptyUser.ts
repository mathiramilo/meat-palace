// Function that checks if an object is empty (doesent have any propperties)

export const isObjEmpty = (obj: object) => Object.keys(obj).length === 0;