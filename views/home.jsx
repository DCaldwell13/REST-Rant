const React = require('react');
const Def = require('./default');

const home = (html) => {
        return (
          <Def>
              <main>
                  <h1>HOME</h1>
                  <div>
                    <img src="./images/ella-olsson-2IxTgsgFi-s-unsplash.jpg" alt="Tasty Breads"/>
                    <div>
                      Photo by <a href="https://unsplash.com/@ellaolsson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ella Olsson</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                  </div>
                  <a href="/places">
                    <button className="btn-primary">Places Page</button>
                  </a>
              </main>
          </Def>
        )
};

module.exports = home;
