const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static(__dirname + '/static'));

app.listen(port, () => console.log(`Hosting static content on port ${port}!`));