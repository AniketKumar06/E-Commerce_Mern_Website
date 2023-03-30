import express from 'express';
//2.import mongoose to connect database 
import mongoose from 'mongoose';
//import routes file
import router from './routes/user-routes'
const app = express();


const PORT = 5000;
app.use(express.json());
// create middleware
app.use('/api/user', router);


//3.connect mongoose data from here 
mongoose.connect('mongodb+srv://admin:5yiPyRPeoVVm7upf@cluster0.za3llzi.mongodb.net/Blog?retryWrites=true&w=majority')
    .then(() => app.listen(PORT))
    .then(() => console.log(`connect to database and Listening to Localhost ${PORT}`))
    .catch((err) => console.log(err));
// create middleware

// password : 5yiPyRPeoVVm7upf

