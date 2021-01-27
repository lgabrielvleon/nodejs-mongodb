const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const cors = require('cors');

//Middleware
app.use(express.json());
app.use(cors());

//Import routes
const postsRoutes = require('./routes/posts')

app.use('/posts', postsRoutes);

//routes
app.get('/', (req, res) => {
    res.send('we are on home')
})



//connect to BD
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to DB!'));

//sever
app.listen(9091);