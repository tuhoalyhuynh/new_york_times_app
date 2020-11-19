const { defaults } = require('pg');
const db = require('./models');

// Create a move
db.movie.findOrCreate({
    where: { title: 'Godfather'},
    defaults: {
        byline: 'Vincent Canby',
        headline: 'Godfather, Part II',
        date: Date.now(),
        url: 'http://nytimes.com'
    }
}).then(([movie, created]) => {
    console.log(created)
    console.log(movie);
})