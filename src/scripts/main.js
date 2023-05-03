


// validador de formulario de contacto

const contactFormValidator = () => {

    const formElement = document.querySelector("#contact-form");


    formElement.addEventListener("submit", (evento) => {
        evento.preventDefault();

        console.log(`inputs recibidos en el evento: ${JSON.stringify(evento.target.elements)}`)
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

dynamicSvgFix();
contactFormValidator();
