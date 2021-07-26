"use strict";
exports.__esModule = true;
exports.ICategory = void 0;
var z = require("zod");
var ICategory;
(function (ICategory) {
    ICategory.CreateSchema = z.object({
        name: z.string().nonempty(),
        isActive: z.boolean()["default"](true),
        picture: z.string().nullable()["default"](null),
        isDefault: z.boolean()["default"](true),
        newTags: z.string().nonempty().array().optional(),
        existingTags: z.string().nonempty().array().optional()
    });
    ICategory.UpdateSequenceSchema = z.object({
        categories: z.array(z.object({
            id: z.string().nonempty(),
            sequence: z.number().min(1)
        }))
    });
    ICategory.UpdateSchema = ICategory.CreateSchema.deepPartial();
})(ICategory = exports.ICategory || (exports.ICategory = {}));
