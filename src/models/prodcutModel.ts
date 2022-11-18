import mongoose, { Document, Schema } from 'mongoose'

export interface ProductInterface {
	name: string
	price: number
}

export interface ProductModelInterface extends ProductInterface, Document {}

const ProductSchema: Schema = new Schema(
	{
		name: { type: String, required: true },
		price: { type: Number, required: true }
	},
	{ timestamps: { createdAt: false, updatedAt: true }, versionKey: false }
)

export default mongoose.model<ProductModelInterface>('Product', ProductSchema)
