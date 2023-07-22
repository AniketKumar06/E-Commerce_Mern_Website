import { createServer } from 'http';
import color from 'colors';
import app from './app.js';
import { config } from 'dotenv';



// CONFIG DOTENV FILE

config({
    path: './env/config.env'
})

const server = createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT,
    console.log(`Server is ${process.env.MODE_DEV} and  running on port : ${PORT}`.blue.underline));