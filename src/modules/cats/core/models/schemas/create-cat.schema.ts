import * as Joi from '@hapi/joi';

export const createCatSchema = Joi.object().keys({
    id: Joi.number().optional(),
    name: Joi.string().required()
})