export const minLengthValidator = (str, length) => {
    //console.log(`lenght validator: str: ${str} | length : ${length}`)

    if(str && typeof str === 'string') {
        return str.length >= length
    }
    return false;
}