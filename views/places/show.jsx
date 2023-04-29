const React = require('react')
const Def = require('../default')

const show= () => {
    return (
        <Def>
          <main>
            <h1>Show Page</h1>
          </main>
        </Def>
    )
};

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id] })
    }
  })
  
  
