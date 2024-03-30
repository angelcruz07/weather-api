const express = require('express')
const router = express.Router()
const citiesController = require('./cities.controllers')
const citiesHttpHandler = require('./cities.http')

router
	.route('/')
	.get(citiesHttpHandler.getCitiesFromDatabase)
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
