// Function that checks if an object is empty (doesnt have any properties)

export const isObjEmpty = (obj: object) => Object.keys(obj).length === 0;