const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
	res.send('api home page');
});

router.get('/user', (req, res) => {
	res.send(JSON.stringify({
		name: 'pelli',
		age: 18,
		job: 'Front-End',
		country: 'China',
		city: 'Beijing'
	}));
});

module.exports = router;
