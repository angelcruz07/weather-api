const express = require('express')
const router = express.Router()
const citiesHttpHandler = require('./cities.http')

router
	.route('/')
	.get(citiesHttpHandler.getCitiesFromDatabase)
	//! Todo: Create logic for  method
	.put(() => {
		res.status(200).send('Hello World!')
	})

//? Todo: Create the logic for the post and delete methods
router
	.route('/cities')
	.post((req, res) => {
		res.status(200).send('Hello World!')
	})
	.delete((req, res) => {
		res.status(200).send('Hello World!')
	})

exports.router = router
