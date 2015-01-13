"use strict";

// Load the libraries and modules

var assets = require(__dirname + '/data/assets.json');
var config = {
    npm: __dirname + '/node_modules/',
    libraries: {
        nodejs: {},
        npm: {}
    },
    directory: __dirname + '/modules/',
    modules: {
        npm: {
            'dragonnodejs-webserver': {
                app: { port: process.env.PORT },
                bower: {
                    libraries: [],
                    path: __dirname + '/bower_components/'
                },
                header: {
                    'X-UA-Compatible': 'IE=edge,chrome=1',
                    'X-Frame-Options': 'DENY',
                    'X-XSS-Protection': '1; mode=block',
                    'X-Powered-By': null
                },
                language: {
                    default: 'en',
                    languages: ['de', 'en'],
                    path: __dirname + '/languages/'
                },
                static: { path: __dirname + '/web/' },
                swig: { views: __dirname + '/views/' }
            }
        },
        directory: {
            detail: { assets: assets },
            list: { assets: assets }
        }
    }
};
require('dragonnodejs')(config);