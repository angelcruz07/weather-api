const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../App').app

chai.use(chaiHttp)

describe('Suit of test endpoint /cities', () => {
	it('Should return cities available', function (done) {
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
})
