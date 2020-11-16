const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req, res) => {
    console.log('celebrities');
    //get all celebrities from database
    Celebrity.find().then(celebrities => {
        //render a celebrities view to display them
        res.render('celebrities/index', { celebritiesList: celebrities})
    }).catch(err => {
        console.log(err);
    })
});
// Iteration #2.2: Don't know yet how to add the 'next' function!

router.get('/celebrities/add', (req, res) => {
    res.render('celebrityForm');
})

router.get('/celebrities/:id', (req, res) => {
    const celebrityId = req.params.id;
    // find the celbrity with that index
    Celebrity.findById(celebrityId)
    .then((celebrity) => {
        //render the view
        console.log(celebrity);
        res.render('celebrityShow', { celebrityShow: celebrity })
        
    })
    .catch(err => {
        console.log(err);
    })
})

router.post('/celebrities/show', (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    console.log(name, occupation, catchPhrase);
    //add the celebrity to the database:
    Celebrity.create({ 
        name, 
        occupation, 
        catchPhrase
    })
    .then(celebrity => {
        console.log(`${celebrity.name} was added to the database`);
        res.redirect('/celebrities/${celebrity._id}');
    })
})


// data needs to be exported, that's why it crashed before:
module.exports = router;