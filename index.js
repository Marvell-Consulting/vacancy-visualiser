const App = require('./src');
const settings = require('./config');

const server = App(settings).listen(settings.port, (err, result) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Listening at http://localhost:${server.address().port}`);
});

process.on('SIGINT', () => {
  if (server.listening) {
    console.log('Attempting to exit gracefully.');
    server.close(() => {
      console.log('Server closed. Quitting.');
      process.exit();
    });
  }
});
