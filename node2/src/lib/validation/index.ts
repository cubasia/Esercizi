import addFormats from "ajv-formats";
import { Validator, ValidationError } from "express-json-validator-middleware"
import { ErrorRequestHandler } from "express";
 

const validator = new Validator({ allErrors: true });

addFormats(validator.ajv, ["date-time"])
    .addKeyword("kind")
    .addKeyword("modifier")

export const validate = validator.validate

export const validatationErrorMiddleware:ErrorRequestHandler = (error, request, response, next) => { 

}

export * from "./planet"

