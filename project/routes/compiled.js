/*jshint node:true */

module.exports = {
	method: 'GET',
	path: '/compiled/{param*}',
	handler: {
		directory: {
			path: 'static/'
		}
	}
};
