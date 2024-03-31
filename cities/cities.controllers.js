// ? Todo: connect to database from mongo
const citiesDatabase = {
	1: { name: 'New York', country: 'USA', population: 8398748 },
	2: { name: 'London', country: 'UK', population: 8908081 },
	3: { name: 'Tokyo', country: 'Japan', population: 9273000 }
}

const citiesArray = Object.values(citiesDatabase)

//? Return the cities from the database

/**
 * Retrieves the cities array.
 * @returns {Array} The cities array.
 */
const getCities = () => {
	return citiesArray
}

//! Este codigo aun no se esta usando aun
const addCityToDatabaseController = async (req, res) => {
	try {
		// Extrae los datos de la ciudad del cuerpo de la solicitud
		const cityData = req.body

		// Llama a la función para agregar la ciudad a la base de datos
		const addedCity = await addCityToDatabase(cityData)

		// Responde con los datos de la ciudad agregada y un código de estado 201 (creado)
		res.status(201).json(addedCity)
	} catch (error) {
		// Si hay algún error, responde con un código de estado 400 (error de solicitud) y un mensaje de error
		res
			.status(400)
			.json({ message: 'Error al agregar la ciudad a la base de datos' })
	}
}

exports.getCities = getCities
exports.addCityToDatabaseController = addCityToDatabaseController
