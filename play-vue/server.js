const express = require('express');
const app = express();

const port = 3578;

app.use(express.static('www'));

app.get('/', (req, res)=>{
	console.log(req, res);
});

app.listen(port, () => {
	console.log('localhost:' + port);
});
