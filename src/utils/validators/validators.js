export const requiredField = (value) => {
    if(value) return undefined;
    return "Field is required"
}

export let maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `max length is ${maxLength} symbols`;
    return undefined;
}

