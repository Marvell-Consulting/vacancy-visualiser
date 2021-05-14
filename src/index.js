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

  app.engine('jsx', expressViews.createEngine({ transformViews: false }));

  app.get('/initial-state', (req, res) => {
    const initialState = {
      mapbox: {
        key: config.mapbox.key,
        lat: 51.5101,
        lng: -0.3055,
        zoom: 11
      }
    };
    res.send(`window.state=${JSON.stringify(initialState)}`);
  });

  app.get('/', (req, res) => {
    res.render('index');
  });

  return app;

};
