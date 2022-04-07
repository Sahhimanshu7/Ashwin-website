const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


const userEmailRouter = require('./routes/userEmail.js');
const userContactRouter = require('./routes/userContact.js');
const userSignUpRouter = require('./routes/userSignUp.js');

app.use('/userEmail', userEmailRouter);
app.use('/userContact', userContactRouter);
app.use('/userSignUp', userSignUpRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
