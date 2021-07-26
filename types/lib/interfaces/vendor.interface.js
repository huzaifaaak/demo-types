"use strict";
exports.__esModule = true;
exports.IVendor = void 0;
var z = require("zod");
var IVendor;
(function (IVendor) {
    IVendor.CreateSchema = z.object({
        name: z.string().nonempty().min(3),
        country: z.string().nonempty(),
        currency: z.string().nonempty()
    });
    IVendor.UpdateSchema = IVendor.CreateSchema.partial().extend({
        address: z.string().nonempty().optional(),
        category: z.string().nonempty().optional()
    });
})(IVendor = exports.IVendor || (exports.IVendor = {}));
