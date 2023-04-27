const router = require('express').Router();

/*router.get('/', (req, res) => {
    res.send('GET /places');
});*/

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: './images/ella-olsson-2IxTgsgFi-s-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: './images/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg'
      }];
      
    res.render('places/index',{places});
});

module.exports = router;

