


// validador de formulario de contacto

import { VALIDATION_RULES } from "./constants/validation-rules.js";
import { renderValidationLabel } from "./services/render-validation.service.js";

const contactFormValidator = () => {

    const formElement = document.querySelector("#contact-form");


    formElement.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const { target: { elements }  } = evento;

        const inputs = inputExtractor(elements, "usr");

        console.log(`inputs recibidos: ${JSON.stringify(evento.target.elements)}`)

        for (let input in inputs) {
            const value = inputs[input];
            const callbackFn = VALIDATION_RULES[input];
            const result = callbackFn?.(value);
            !result && renderValidationLabel(input);
        }
    })
}

// renderizado de la validación



// utilitario de extracción de campos

const inputExtractor = (inputCollection, prefix = "") => {
    if(inputCollection) {
        const inputArr = [...inputCollection];
        const filteredArr = inputArr.filter(input => input.name.startsWith(prefix));
        return filteredArr.reduce((acc, current) => {
            const { name, value, checked } = current;
            acc[name] = value || checked;
            return acc;
        },{})
    }
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

dynamicSvgFix();
contactFormValidator();
