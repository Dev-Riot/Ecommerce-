const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
dotenv.config();
const PORT = 5000 || process.env.PORT

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Connected to DB"))
.catch((err)=>console.log(err))
app.use(express.json())
app.use('/api', userRoute)
app.use('/api/auth', authRoute)
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))


