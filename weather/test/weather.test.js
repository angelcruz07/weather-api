const chai = require('chai')
const chaiHttp = require('chai-http')
const router = require('../weather').router
const app = require('../../App').app

chai.use(chaiHttp)

describe('Suit of test endpoints weather', () => {
	it('Should return Hello World', (done) => {
		chai
			.request(app)
			.get('/')
			.end((err, res) => {
				chai.assert.equal(res.text, 'Hello World!')
				done()
			})
	})
})
