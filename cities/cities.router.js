const express = require('express')
const router = express.Router()
const citiesController = require('./cities.controllers')

router.route('/').get((req, res) => {
	// Devolver las ciudades
	res.status(200).json(citiesController.getCities())
})
// .put(() => {
// 	res.status(200).send('Hello World!')
// })

// router
// 	.route('/cities')
// 	.post((req, res) => {
// 		res.status(200).send('Hello World!')
// 	})
// 	.delete((req, res) => {
// 		res.status(200).send('Hello World!')
// 	})

exports.router = router
