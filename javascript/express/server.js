const express = require('express');
const app = express();
const port = 3001;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Specify the views directory
app.set('views', __dirname + '/views');

 //res.status(200).send('Hello, world!');
   // res.status(200).download('server.js');

// Example route with parameterized data
app.get('/', (req, res) => {
    res.render('index'); // Pass data to the view
});

const userRouter = require('./routes/users');
app.use('/users', userRouter);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
