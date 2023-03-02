import joi from "joi";

export const idSchema = joi.object({
    id: joi.number().min(1).required()
})