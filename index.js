"use strict";
exports.__esModule = true;
var compile = function (html, data) {
    for (var key in data) {
        html = html.replace("{{".concat(key, "}}"), data[key]);
    }
    return html;
};
exports["default"] = compile;
