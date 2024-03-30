const citiesController = require('./cities.controllers')

//? Add methods to the controler

/**
 * Controller for handling operations related to cities in the database
 * @type {Object}
 */
getCitiesFromDatabase = async (req, res) => {
	let cities = await citiesController.getCities()
	res.status(200).json(cities)
}

exports.getCitiesFromDatabase = getCitiesFromDatabase
