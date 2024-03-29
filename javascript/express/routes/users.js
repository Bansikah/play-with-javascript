const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('user'); 
});

router.get('/new', (req, res) => {
    res.render('newUser'); 
});


router.post('/', (req, res) => {
    res.send('Create user'); 
});


//using the router method from express to create our routes 

router.route('/:id').get( (req, res) => {
    console.log(req.user);
    res.send(`Get user by ID: ${req.params.id}`); 
}).put((req, res) => {
    res.send(`update user by ID: ${req.params.id}`); 
}).delete((req, res) => {
    res.send(`Delete user by ID: ${req.params.id}`); 
});


//using the param method with routes, a param is a middleware , it seats between the  client and  the employess

const users = [{ name: 'John'}, { name: 'Noel' }];
router.param("id", (req, res, next, id) => {
    //req.id = id;
    //console.log(req.id);
    res.user = users[id];
    next();
    //next();
});

/*
router.post('/', (req, res) => {
    res.send('Create user'); 
});

router.get('/:id', (req, res) => {
    res.send(`Get user by ID: ${req.params.id}`); 
});

router.put('/:id', (req, res) => {
    res.send(`update user by ID: ${req.params.id}`); 
});

router.delete('/:id', (req, res) => {
    res.send(`Delete user by ID: ${req.params.id}`); 
});
*/
module.exports = router