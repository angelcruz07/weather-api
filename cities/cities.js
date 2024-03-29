const express = require('express')
const router = express.Router()

router
	.route('/')
	.get((req, res) => {
		res.status(200).send('Hello World!')
	})
	.put(() => {
		res.status(200).send('Hello World!')
	})

router
	.route('/cities')
	.post((req, res) => {
		res.status(200).send('Hello World!')
	})
	.delete((req, res) => {
		res.status(200).send('Hello World!')
	})

exports.router = router
