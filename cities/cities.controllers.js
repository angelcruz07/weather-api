const citiesDatabase = {
	1: { name: 'New York', country: 'USA', population: 8398748 },
	2: { name: 'London', country: 'UK', population: 8908081 },
	3: { name: 'Tokyo', country: 'Japan', population: 9273000 }
}

const citiesArray = Object.values(citiesDatabase)

const getCities = () => {
	console.log('Getting cities:', citiesArray)
	return citiesArray
}

exports.getCities = getCities
