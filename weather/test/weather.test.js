const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../App').app

chai.use(chaiHttp)

describe('Suit of test endpoint weather', () => {
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
