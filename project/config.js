module.exports = {
    hostname: 'localhost',
    port: 8000,
    urls: {
        failureRedirect: '/login',
        successRedirect: '/'
    },
    facebook: {
        clientID: "...",
        clientSecret: "...",
        callbackURL: "http://localhost:8000/auth/facebook/callback"
    },
    views: {
        engines: {
            jade: 'jade',
        },
        path: __dirname + '/templates',
        compileOptions: {
            pretty: true
        }
    },
    files: {
        path: 'cwd'
    }
};
