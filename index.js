"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compile = (html, data) => {
    for (const key in data) {
        html = html.replace(`{{${key}}}`, data[key]);
    }
    return html;
};
exports.default = compile;
