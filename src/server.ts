import * as dotenv from 'dotenv'
import app from './app'

dotenv.config()

const PORT = process.env.PORT || 4000;



app.listen(PORT, ()=> console.info(`Server is on port ${PORT}`))
