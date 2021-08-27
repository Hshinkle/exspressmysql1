import express from 'express';
import bodyParser from 'body-parser';
import studentRoutes from './routes/students.js'

const app = express();
const port = 7000;

app.use( bodyParser.urlencoded({ extended: true}));
app.use( bodyParser.json());

const home = (request, response) => {
    response.send('hi there')
}
app.get('/', home);   // localhost:3000/
app.use('/student', studentRoutes); // localhost:3000/students

app.listen( port, () => console.log( 'listening on port ' + port));