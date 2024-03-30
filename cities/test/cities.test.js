const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../App').app

chai.use(chaiHttp)

describe('Suit of test endpoint /cities', () => {
	it('Should return cities available', (done) => {
		chai
			.request(app)
			.get('/cities')
			.end((err, res) => {
				// Esperar una respuesta con un array de ciudades
				chai.expect(res).to.have.status(200)
				chai.expect(res).to.be.json
				chai.expect(res.body).to.be.an('array').that.is.not.empty
				done()
			})
	})
})
