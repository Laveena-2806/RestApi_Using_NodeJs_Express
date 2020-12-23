import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

// initialize our express application, our full application lie under app variable
const app = express();

// port of our application
const PORT = 5000;

// initialize body parser, json() this is to specify that we are using json format data in our application
app.use(bodyParser.json());

app.use('/users', usersRoutes);

// creating routes
app.get('/', (req, res) => res.send('Hello From HomePage..'));

// make our application listen
app.listen(PORT, () => console.log(`server running on port:http://localhost:${PORT}`));