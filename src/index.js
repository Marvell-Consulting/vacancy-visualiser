require('@babel/register')();
const path = require('path');
const express = require('express');
const expressViews = require('express-react-views');

module.exports = config => {

  const app = express();

  app.use('/public', express.static(path.resolve(__dirname, '../public')));

  app.set('view engine', 'jsx');
  app.set('views', [
    path.resolve(__dirname, './views')
  ]);

  app.engine('jsx', expressViews.createEngine({
    transformViews: false
  }));

  app.use((req, res, next) => {
    if (req.path !== '/') {
      return res.redirect('/');
    }
    next();
  });

  app.get('/', (req, res) => {
    res.render('index');
  });

  return app;

};
