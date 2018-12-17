const express = require('express');
const cors = require('cors');
const api = require('./api/index');
const app = express();

const port = 8989;

app.use(cors());
app.use('/', api);

app.listen(port, () => {
	console.log('localhost:' + port);
});
