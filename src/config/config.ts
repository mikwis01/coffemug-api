import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Log from '../utils/CustomLogs'

dotenv.config()

const { DB_USERNAME, DB_PASSWORD, PORT } = process.env

/**Connect to a database */
export const connectDB = async () => {
	try {
		const connection = await mongoose.connect(
			`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.wrrnl8r.mongodb.net/?retryWrites=true&w=majority`
		)

		Log.info(
			`Database connection established: ${connection.connection.host}`
		)
	} catch (error) {
		Log.error(`Something went wrong!: ${error}`)

		process.exit(1)
	}
}

/**Get default server port */
export const port: number = Number(PORT)
