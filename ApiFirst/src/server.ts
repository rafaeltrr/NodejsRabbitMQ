import express from 'express'
import Routes from './controllers/routes'

const app = express();

app.use(express.json())
app.use(Routes);

app.listen(3000, () => console.log('server running on port 3000'))