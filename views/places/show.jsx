const React = require('react')
const Def = require('../default')

const show= (data) => {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      No ratings yet
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings/ data.place.comments.length)
    let stars =''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐'
    }
    rating =(
      <h3>
        {stars} stars
      </h3>
    )
    comments = data.place.comments.map((comment, i) => {
      return (
        <div className="border">
        <h2 className="rant">{c.rant ? 'Rant!': 'Rave!'} </h2>
          <h4>{comment.author}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.star}</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
           <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
               Edit
            </a> 
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
            </div>
            <div className="col-sm-6">
            <form method="POST" action={`/places/${data.place.id}/comment?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger" value="Delete Comment">
                 Delete
              </button>
              <h2>Rating</h2>
              {rating}
              <br />
              <h2>Description</h2>
              <h3>
                {data.place.showEstablished()}
              </h3>
              <h4>
                Serving {data.place.cuisines}
              </h4>
            </form> 
            </div>
            <h2>Comments</h2>
            {comments}
          </main>
        </Def>
    ) 
};     

module.exports = show;