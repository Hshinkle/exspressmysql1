import express from 'express';
import bodyParser from 'body-parser';
import studentRoutes from './routes/students.js'
import cors from 'cors'

const app = express();
const port = 5000;

app.use( bodyParser.urlencoded({ extended: true}));
app.use( bodyParser.json());
app.use(cors())

const home = (request, response) => {
    response.send('hi there')
}
app.get('/', home);   // localhost:3000/
app.use('/students', studentRoutes); // localhost:3000/students

app.listen( port, () => console.log( 'listening on port ' + port));