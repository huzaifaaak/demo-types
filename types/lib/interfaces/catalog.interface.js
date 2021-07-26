"use strict";
exports.__esModule = true;
exports.ICatalog = void 0;
var z = require("zod");
var ICatalog;
(function (ICatalog) {
    ICatalog.CreateSchema = z.object({
        title: z.string(),
        isDefault: z.boolean()["default"](false),
        isActive: z.boolean()["default"](true)
    });
})(ICatalog = exports.ICatalog || (exports.ICatalog = {}));
