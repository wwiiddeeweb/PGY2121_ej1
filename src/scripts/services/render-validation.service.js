export const renderValidationLabel = (element) => {
    console.log('POR HACER: debe renderizar la validación en el front-end')
    const errorLabel = element.concat('_err')
    const el = document.querySelector(`#${errorLabel}`);
    return el && applyErrorStyle(el);
}


const applyErrorStyle = (element) => {
    element.style.color = 'red';
    element.innerHTML = "ERROR!";
}