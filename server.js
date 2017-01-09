const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 8000));

// Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
