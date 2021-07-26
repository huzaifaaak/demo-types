"use strict";
exports.__esModule = true;
exports.IItem = void 0;
var z = require("zod");
var IItem;
(function (IItem) {
    IItem.QuerySchema = z.object({
        catalogId: z.string().optional(),
        categoryId: z.string().optional()
    });
    IItem.CreateSchema = z.object({
        categoryId: z.string().nonempty(),
        name: z.string().nonempty(),
        price: z.number().positive(),
        discount: z
            .number()
            .refine(function (value) { return value >= 0 && value <= 100; }, {
            params: {
                discount: {
                    maximum: 100,
                    minimum: 0
                }
            }
        })
            .optional(),
        description: z.string().nonempty().optional(),
        picture: z.string().nonempty().optional(),
        newTags: z.string().nonempty().array().optional(),
        existingTags: z.string().nonempty().array().optional()
    });
    IItem.UpdateSchema = IItem.CreateSchema.deepPartial().omit({ categoryId: true });
})(IItem = exports.IItem || (exports.IItem = {}));
