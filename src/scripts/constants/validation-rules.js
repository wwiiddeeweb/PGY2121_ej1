import { isChecked } from "../validators/boolean-validators.js";
import { minLengthValidator } from "../validators/string-validators.js";

export const VALIDATION_RULES
    = {
    usr_pnombre: {
        validatorFn: (str) => minLengthValidator(str, 1),
        customError: 'Debe ingresar su nombre'
    },
    usr_papellido: {
        validatorFn: (str) => minLengthValidator(str, 1),
        customError: 'Debe ingresar apellido'
    },
    usr_comuna: {
        validatorFn: (str) => minLengthValidator(str, 4),
        customError: 'Debe ingresar su comuna'
    },
    usr_codpostal: {
        validatorFn: (str) => minLengthValidator(str, 4),
        customError: 'Debe ingresar su código postal'
    },
    usr_provincia: {
        validatorFn: (str) => minLengthValidator(str, 4),
        customError: 'Debe seleccionar provincia'
    },
    usr_solicitud: {
        validatorFn: (str) => minLengthValidator(str, 15),
        customError: 'Por favor, complete su solicitud. Mínimo 15 carácteres'
    },
    usr_aceptocondiciones: {
        validatorFn: (value) => isChecked(value),
        customError: 'Debe aceptar las condiciones'
    },
}