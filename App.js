const express = require('express')

// App
const app = express()
const port = 3000

// Routes
citiesRoutes = require('./cities/cities.router').router

// Route get
app.get('/', (req, res) => {
	res.status(200).send('Hello World!')
})

app.use('/cities', citiesRoutes)

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})

exports.app = app
