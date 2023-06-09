const React = require('react')
const Def = require('../default')

const edit_form = (data) => {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action={`/places/${data.places.id}?_method=PUT`}>
                  <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" 
                        id="name" 
                        name="name" 
                        value={data.places.name} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" 
                        type="url" 
                        id="pic" 
                        name="pic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" 
                        id="city" 
                        name="city" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" 
                        id="state" 
                        name="state" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" 
                        id="cuisines" 
                        name="cuisines" required />
                    </div>
                    <div className="form-group col-sm-4">
                        <label htmlFor="founded">Founded Year</label>
                        <input type="number" className="form-control" 
                        id="founded" 
                        name="founded" 
                        value={data.place.founded}
                        />
                    </div>
                    <input className="btn btn-primary" 
                    type="submit" 
                    value="Add Place" />
                  </div>
                </form>
            </main>
        </Def>
    )
};

module.exports = edit_form;

// Error! edit_form (C:\Users\fxmoo\REST-Rant\views\places\/edit.jsx:9:68)
