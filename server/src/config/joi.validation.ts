import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(4000),
  DEFAULT_PAGE: Joi.number().default(1),
  DEFAULT_LIMIT: Joi.number().default(10),
});
