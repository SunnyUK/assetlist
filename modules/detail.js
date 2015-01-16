"use strict";

/**
 * Serves the page with the assetdetail
 * @example
    detail: { assets: {} }
 */

module.exports = function (config, libraries, services) {
    var app = services.app,
        language = services.language;

    app.get(
        '/:id/:language?',
        function (req, res, next) {
            language(req.params.language, res);
            next();
        },
        function (req, res) {
            config.asset = config.assets[req.params.id];
            res.render('detail.twig', config);
        }
    );
};
