const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../App').app

chai.use(chaiHttp)

describe('Suit of test endpoint /cities', () => {
	//? GET
	it('Should return cities available of the database', function (done) {
		this.timeout(5000)
		chai
			.request(app)
			.get('/cities')
			.end((err, res) => {
				chai.expect(res).to.have.status(200)
				chai.expect(res).to.be.json
				chai.expect(res.body).to.be.an('array').that.is.not.empty
				done()
			})
	})
	//? POST
	it('Should return Name City and Country', function (done) {
		this.timeout(5000)
		const mockRequest = {
			body: {
				latitude: '40.7128',
				longitude: '-74.0060'
			}
		}

		chai
			.request(app)
			.post('/cities') // Cambiado de '/' a '/cities'
			.send(mockRequest.body)
			.end((err, response) => {
				if (err) done(err)
				chai.assert.equal(response.status, 200)
				chai.assert.equal(response.body.cityName, 'New York')
				chai.assert.equal(response.body.country, 'US')
				done()
			})
	})
	//? PUT
	it('Sould return Hello World! with PUT', function (done) {
		chai
			.request(app)
			.put('/cities')
			.end((err, res) => {
				chai.expect(res).to.have.status(200)
				chai.expect(res.text).to.be.equal('Hello World!')
				done()
			})
	})
	//? DELETE
	// it('Should return Hello World! with DELETE', function (done) {
	// 	chai.request(app).delete('/cities/1')
	// 	end((err, res) => {
	// 		chai.expect(res).to.have.status(200)
	// 		chai.expect(res.text).to.be.equal('Hello World!')
	// 		done()
	// 	})
	// })
})
