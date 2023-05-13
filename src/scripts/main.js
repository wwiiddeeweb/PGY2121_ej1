import { VALIDATION_RULES } from "./constants/validation-rules.js";
import { renderValidationLabel } from "./services/render-validation.service.js";
import { inputExtractor } from "./utils/form.utils.js";

// arr de validaciones

let inputValidations = [];

const areAllInputsValid = () => {
    return inputValidations.every(value => value === true);
}

// handler del formulario de contacto de la página principal
const contactFormHandler = async () => {

    const formElement = document.querySelector("#contact-form");


    formElement.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const { target: { elements }  } = evento;
        const inputs = inputExtractor(elements, "usr");

        inputValidations = [];
        for (let input in inputs) {
            const value = inputs[input];

            const { validatorFn, customError } = VALIDATION_RULES[input];
            if(validatorFn) {
                const result = validatorFn?.(value);

                inputValidations.push(Boolean(result));
                customError ? renderValidationLabel(result, input, customError) : renderValidationLabel(result, input);
            }
        }
        const allValid = areAllInputsValid();
        if(!allValid){
            return console.log('[VALIDACIONES ERROR!] No se enviará al servidor');
        }
        console.log('[VALIDACIONES OK!] Enviando al servidor...');
        setTimeout(() => {
            console.log('[SERVIDOR] Formulario recibido!')

        },1000)
    })
}

// fix para svg externo con animación de path
const dynamicSvgFix = () => {
    const svgHolder = document.querySelector('object#dynamic-svg');
    svgHolder.onload = () => {
        const svgDocument = svgHolder.contentDocument;
        const style = svgDocument.createElementNS("http://www.w3.org/2000/svg", "style");
        style.textContent = '@import url("producto_animado.css");';
        const svgElem = svgDocument.querySelector('svg');
        svgElem.insertBefore(style, svgElem.firstChild);
    };
}

// ejecuciones:

dynamicSvgFix();
contactFormHandler();
