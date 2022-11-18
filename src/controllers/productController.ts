import { Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import Product from '../models/prodcutModel'

const getAllProducts = (req: Request, res: Response, next: NextFunction) => {
	return Product.find()
		.then((products) => res.status(200).json({ products }))
		.catch((err) => res.status(500).json({ err }))
}

const getProduct = (req: Request, res: Response, next: NextFunction) => {
	const productId = req.params.productId

	return Product.findById(productId)
		.then((product) =>
			product
				? res.status(200).json({ product })
				: res.status(404).json({ message: 'Not found!' })
		)
		.catch((err) => res.status(500).json({ err }))
}

const createProduct = (req: Request, res: Response, next: NextFunction) => {
	const { name, price } = req.body

	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		name,
		price
	})

	return product
		.save()
		.then((product) => res.status(201).json({ product }))
		.catch((err) => res.status(500).json({ err }))
}

const updateProduct = (req: Request, res: Response, next: NextFunction) => {
	const productId = req.params.productId

	return Product.findById(productId)
		.then((product) => {
			if (product) {
				product.set(req.body)

				return product
					.save()
					.then((product) => res.status(201).json({ product }))
					.catch((err) => res.status(500).json({ err }))
			} else {
				res.status(404).json({ message: 'Not found!' })
			}
		})
		.catch((err) => res.status(500).json({ err }))
}

const deleteProduct = (req: Request, res: Response, next: NextFunction) => {
	const productId = req.params.productId

	return Product.findByIdAndDelete(productId)
		.then((product) =>
			product
				? res.status(200).json({ message: 'Product has been deleted!' })
				: res.status(404).json({ message: 'Not found!' })
		)
		.catch((err) => res.status(500).json({ err }))
}

export {
	getAllProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct
}
