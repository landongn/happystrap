/*jshint node:true */

module.exports = {
	method: 'GET',
	path: '/static/{param*}',
	handler: {
		directory: {
			path: 'source/'
		}
	}
};
