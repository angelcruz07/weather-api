const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())

// Route get
app.get('/', (req, res) => {
	res.status(200).send('Hello World!')
})

// Route post
app.post('/login', (req, res) => {
	const { username, password } = req.body
	res.send(`Usuario: ${username} ha iniciado sesion`)
})

// Route put
app.put('/usuarios:id', (req, res) => {
	const userId = req.params.id

	res.send(`Usuario con Id ${userId} ha sido actualizado`)
})
// Route delete
app.delete('/usuarios:id', (req, res) => {
	const userId = req.params.id

	res.send(`Usuario con Id ${userId} ha sido eliminado`)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

exports.app = app
