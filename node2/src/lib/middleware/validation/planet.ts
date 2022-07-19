import { Static, TSchema, TString, Type } from "@sinclair/typebox"
export const DateKind = Symbol("DateKind");
export interface TDate extends TSchema { type: "string" ; $static: Date; kind: typeof DateKind }
export const TypeDate = Type.String({ format: "date-time" }) as TString | TDate;

//updateDate: Type.Optional(TypeDate), // gestione di un campo data
export const planetSchema = Type.Object({
    name: Type.String(),
    description: Type.Optional(Type.String()),
    diameter: Type.Integer(),
    moons: Type.Integer(),
    photoFilename: Type.Optional(Type.String()),
},{additionalProperties: false})

export type PlanetData = Static<typeof planetSchema>