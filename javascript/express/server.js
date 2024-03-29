const express = require('express');
const app = express();
const port = 3001;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.use(logger)

// Specify the views directory
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
//app.use(express.json()); use to do json requests

 //res.status(200).send('Hello, world!');
   // res.status(200).download('server.js');

// Example route with parameterized data
app.get('/', (req, res) => {
    res.render('index'); // Pass data to the view
});


//using files from the public folder
//app.use(express.static('public'));

//another middleware function is logger function
function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.use(express.urlencoded({ extended: true }));
    

const userRouter = require('./routes/users');
app.use('/users', userRouter);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
