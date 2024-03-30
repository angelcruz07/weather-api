const citiesController = require('./cities.controllers')

getCitiesFromDatabase = async (req, res) => {
	let cities = await citiesController.getCities()
	res.status(200).json(cities)
}

exports.getCitiesFromDatabase = getCitiesFromDatabase
