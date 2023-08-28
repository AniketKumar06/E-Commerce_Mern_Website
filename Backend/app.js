import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import connectDB from './env/db.js';
import userRouter from './api/routes/userRoute.js';

/**Creating app */
const app = express();

/**Using Morgan for Method View */
app.use(morgan('dev'));

/**Creating  middleware */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/**Linking Database!! */
connectDB();


/** creating api using middleware*/

app.use('/api/v1/auth', userRouter);


/**
 * Error Handling While Enter Wrong URL 
 */

app.use('', async (req, res, next) => {

    res.status(500).json({
        success: false,
        error: "Bad Respone Enter Url is Wrong!! Please Check!!"
    });
});

export default app;