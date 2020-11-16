const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/lab-mongoose-movies', {
    useNewUrlParser: true
});

const celebrities = [
    {
        name: 'Tom',
        occupation: 'Physical Actor',
        catchPhrase: 'I will get you, Jerry!'
    },
    {
        name: 'Jane',
        occupation: 'Biologist',
        catchPhrase: 'Tarzan, use your words!'
    },
    {
        name: 'Miss Fisher',
        occupation: 'Detective',
        catchPhrase: 'Catch up, Inspector!'
    }
];

Celebrity.insertMany(celebrities)
    .then(data => {
        console.log(`Success! ${data.length} celebrities added to the collection`);
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
    });