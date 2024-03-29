const express = require('express')

// App
const app = express()
const port = 3000

// Routes
weatherRoutes = require('./weather/weather').router

// Route get
app.get('/', (req, res) => {
	res.status(200).send('Hello World!')
})

app.use('/weather', weatherRoutes)

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})

exports.app = app
