const React = require('react')
const Def = require('../default')

const show= (data) => {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <a href="`/places/${data.place.id}/edit" className="btn btn-warning"> 
               Edit
            </a> 
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                 Delete
              </button>
              <h2>Rating</h2>
              <h2>Description</h2>
            </form> 
          </main>
        </Def>
    ) 
};     

module.exports = show;