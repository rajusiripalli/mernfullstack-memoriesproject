const express = require('express');
const cors = require('express');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const postsRouter = require('./routes/posts/posts');
const { errorHandler } = require('./middleware/errorMiddleware');


const app = express();

const PORT  =  process.env.PORT || 5000

connectDB();

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

app.use('/posts', postsRouter);

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
