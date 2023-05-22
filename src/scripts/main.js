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

// controlador del formulario login
const toggleLoginForm = () => {
    const loginBtn = document.getElementById('login-form-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    const loginForm = document.querySelector('.form-container');
    const blurFilter = document.getElementById('blur-filter');
    const bodyWrapper = document.querySelector('body');
    let isOverflowHidden = false;

    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        toggleVisibility(loginForm);
        toggleVisibility(blurFilter);
        if(isOverflowHidden === false) {
            bodyWrapper.style.setProperty('overflow','hidden');
            isOverflowHidden = true;
        }
    })

    cancelBtn.addEventListener('click', (event) => {
        event.preventDefault();
        toggleVisibility(loginForm);
        toggleVisibility(blurFilter);
        if(isOverflowHidden === true) {
            bodyWrapper.style.setProperty('overflow','auto')
            isOverflowHidden = false;
        }
    })

    const toggleVisibility = (HTMLElement) => {
        HTMLElement.style.visibility === 'hidden' || HTMLElement.style.cssText === ''
            ? HTMLElement.style.visibility = 'visible'
            : HTMLElement.style.visibility = 'hidden';
    }
}

// ejecuciones:

dynamicSvgFix();
contactFormHandler();
toggleLoginForm();
