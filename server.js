const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('.'));

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  console.log('Open the browser to view your page!');
});