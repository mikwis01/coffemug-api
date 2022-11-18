import express from 'express'
import { connectDB, port } from './config/config'
import Log from './utils/CustomLogs'
import productRoutes from './routes/productRoutes'

/**If database connection is established - run server */
connectDB().then(() => {
	/**App initialization */
	const app = express()

	/**Middelware */
	app.use(express.urlencoded({ extended: true }))
	app.use(express.json())

	/**Routes */
	app.use('/product', productRoutes)

	/**Ping */
	app.get('/ping', (req, res) =>
		res.status(200).json({ message: 'API is working properly' })
	)

	/**Handle error */
	app.use((req, res) => {
		const err = new Error(`We don't have what you're looking for!`)
		Log.error(err)

		return res.status(404).json({ message: err.message })
	})

	/**Run server */
	app.listen(port, () => Log.info(`Server is running on port: ${port}`))
})
