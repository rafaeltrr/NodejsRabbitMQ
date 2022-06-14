import express from 'express'
import Routes from './queue/routes'
import queue from './queue'
const app = express();

app.use(express.json())
app.use(Routes);
queue();


app.listen(3000, () => console.log('server running on port 3000'))