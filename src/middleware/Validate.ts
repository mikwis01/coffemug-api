import Joi, { ObjectSchema } from 'joi'
import { Request, Response, NextFunction } from 'express'
import Log from '../utils/CustomLogs'
import { ProductInterface } from '../models/prodcutModel'

export const Validate = (schema: ObjectSchema) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.validateAsync(req.body)

			next()
		} catch (err) {
			Log.error(err)

			return res.status(422).json({ err })
		}
	}
}

export const Schemas = {
	product: {
		create: Joi.object<ProductInterface>({
			name: Joi.string().min(1).max(100).required(),
			price: Joi.number().min(0).required()
		}),
		update: Joi.object<ProductInterface>({
			name: Joi.string().min(1).max(100).required(),
			price: Joi.number().min(0).required()
		})
	}
}
