export const renderValidationLabel = (isValid, element, customError) => {

    const errorLabel = element.concat('_err')
    const el = document.querySelector(`#${errorLabel}`);

    if(isValid && el) {
        return removeErrorStyle(el);
    }

    if(!isValid && el && customError ) {
        return applyErrorStyle(el, customError)
    }

    applyErrorStyle(el, customError);
}


const applyErrorStyle = (element, customError) => {
    element.style.color = 'red';
    if(!customError) {
        element.innerHTML = "ERROR!";
    }
    element.innerHTML = customError.toString();
}

export const removeErrorStyle = (element) => {
    element.innerHTML = "";
}