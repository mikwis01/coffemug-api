import express from 'express'
import {
	getAllProducts,
	getProduct,
	createProduct,
	updateProduct,
	deleteProduct
} from '../controllers/productController'
import { Validate, Schemas } from '../middleware/Validate'

const router = express.Router()

/**Product routes */
router.get('/get', getAllProducts)

router.get('/get/:productId', getProduct)

router.post('/create', Validate(Schemas.product.create), createProduct)

router.put(
	'/update/:productId',
	Validate(Schemas.product.update),
	updateProduct
)

router.delete('/delete/:productId', deleteProduct)

export default router
