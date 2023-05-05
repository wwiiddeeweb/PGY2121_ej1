import { minLengthValidator } from "../validators/string-validators.js";

export const VALIDATION_RULES
    = {
    usr_pnombre: (str) => minLengthValidator(str, 3),
    usr_papellido: (str) => minLengthValidator(str, 5),
    usr_comuna: (str) => minLengthValidator(str, 4),
    usr_codpostal: () => true,
    usr_solicitud: () => true,
    usr_aceptocondiciones: (val) => val,
}