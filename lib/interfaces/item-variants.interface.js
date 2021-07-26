"use strict";
exports.__esModule = true;
exports.IItemVariant = void 0;
var z = require("zod");
var IItemVariant;
(function (IItemVariant) {
    IItemVariant.CreateSchema = z.object({
        name: z.string().nonempty(),
        price: z.number().positive()
    });
    IItemVariant.UpdateSchema = IItemVariant.CreateSchema.partial();
})(IItemVariant = exports.IItemVariant || (exports.IItemVariant = {}));
