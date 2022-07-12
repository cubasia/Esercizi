import addFormats from "ajv-formats";
import { Validator } from "express-json-validator-middleware"

const validator = new Validator({ allErrors: true });

addFormats(validator.ajv, ["date-time"])
    .addKeyword("kind")
    .addKeyword("modifier")

export const validate = validator.validate
export * from "./planet"

