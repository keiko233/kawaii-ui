export const isArray = Array.isArray;
export const isString = (val: any) => typeof val === 'string';
export const isSymbol = (val: any) => typeof val === 'symbol';
export const isObject = (val: null) => val !== null && typeof val === 'object';