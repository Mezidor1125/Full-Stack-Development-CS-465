const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

/* get traveler view */
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: pagetitle});
};
module.exports = {
    travel
};