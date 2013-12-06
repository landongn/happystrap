module.exports = {
	method: 'GET',
	path: '/',
	handler: function (request) {
		/* do things with request; */
		request.reply.view('index', {
        title: 'radiate.im'
    });
	}
};
