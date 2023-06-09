const React = require('react');
const Def = require('./default');

const error404 = () => {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                    <img src="./images/zeynep-sumer-lk3F07BN8T8-unsplash.jpg" alt="Tasty Breads"/>
                    <div>
                      Photo by <a href="https://unsplash.com/pt-br/@ispywithmylittleeye?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zeynep Sümer</a> on <a href="https://unsplash.com/s/photos/free-images?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                  </div>
          </main>
      </Def>
    )
  };
  

module.exports = error404;

