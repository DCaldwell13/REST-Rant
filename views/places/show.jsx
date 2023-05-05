const React = require('react')
const Def = require('../default')

const show= (data) => {
    return (
        <Def>
          <main>
           <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <a href="`/places/${data.place.id}/edit" className="btn btn-warning"> 
               Edit
            </a> 
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
            </div>
            <div className="col-sm-6">
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                 Delete
              </button>
              <h2>Rating</h2>
              <h2>Description</h2>
              <h3>
                {data.place.showEstablished()}
              </h3>
              <h4>
                Serving {data.place.cuisines}
              </h4>
            </form> 
            </div>
          </main>
        </Def>
    ) 
};     

module.exports = show;