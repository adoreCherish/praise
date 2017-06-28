const request = require('request-promise');
class indexModel {
	constructor(ctx) {
		this.ctx = ctx;
	}
	updateData() {
		var options = {
			method: 'GET',
			uri: 'http://localhost/phpTest.php',
		};
		return new Promise((resolve, reject) => {
			resolve(options)
				.then(function(result) {
					//console.log('result:'+result);
					const info = JSON.parse(result);
					if (info) {
						resolve({
							data: info
						})
					} else {
						reject({
							data: 0
						})
					}
				})
				.catch(function(err) {

				});
		})
	}
}
export default indexModel;