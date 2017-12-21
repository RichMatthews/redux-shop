const express = require('express');

const app = express();

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(process.env.PORT || 8080);
