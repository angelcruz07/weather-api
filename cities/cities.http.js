const axios = require('axios')
const citiesController = require('./cities.controllers')

//? Add methods to the controler

/**
 * Controller for handling operations related to cities in the database
 * @type {Object}
 */
const getCitiesFromDatabase = async (req, res) => {
	let cities = await citiesController.getCities()
	res.status(200).json(cities)
}

/**
 * Adds a city to the database based on the provided latitude and longitude.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the city is added to the database.
 * @throws {Error} - If there is an error in the API call or adding the city to the database.
 */
const addCityToDatabase = async (req, res) => {
	const apiKey = process.env.API_KEY
	try {
		const { latitude, longitude } = req.body
		const apiResponse = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
		)
		const cityName = apiResponse.data.name
		const country = apiResponse.data.sys.country
		res.status(200).json({ cityName, country })
	} catch (error) {
		console.error(error)
		res.status(401).send('Error en la llamada a la API')
	}
}

exports.getCitiesFromDatabase = getCitiesFromDatabase
exports.addCityToDatabase = addCityToDatabase
