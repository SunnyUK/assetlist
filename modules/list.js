"use strict";

/**
 * Serves the page with the assetlist
 * @example
    list: { assets: {} }
 */

module.exports = function (config, libraries, services) {
    var app = services.app,
        language = services.language;

    app.get(
        '/:language?',
        function (req, res, next) {
            language(req.params.language, res);
            next();
        },
        function (req, res) {
            res.render('list', config);
        }
    );
};
