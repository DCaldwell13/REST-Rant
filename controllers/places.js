const router = require('express').Router();
const places = require("../models/places.js")

router.get('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places');
});

router.get('/new', (req, res) => {
  res.redirect('places/new')
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.send('POST /places')
});

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

