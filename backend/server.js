const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


const userEmailRouter = require('./routes/userEmail.js');
const userContactRouter = require('./routes/userContact.js');
const userSignUpRouter = require('./routes/userSignUp.js');
const adminLogin = require('./routes/adminLogin.js');
const newBlog = require('./routes/newBlog.js');
const imagesRoutes = require('./routes/images.js');

app.use('/userEmail', userEmailRouter);
app.use('/userContact', userContactRouter);
app.use('/userSignUp', userSignUpRouter);
app.use('/adminLogin', adminLogin);
app.use('/newBlog', newBlog);
app.use('/images', imagesRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
