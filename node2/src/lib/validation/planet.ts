import { Static, Type } from "@sinclair/typebox"

export const planetSchema = Type.Object({
    name: Type.String(),
    desc: Type.Optional(Type.String()),
    diameter: Type.Integer()
},{additionalProperties: false}
)

export type PlanetData = Static<typeof planetSchema>
