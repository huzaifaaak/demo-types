"use strict";
exports.__esModule = true;
exports.IAuth = void 0;
var z = require("zod");
var IAuth;
(function (IAuth) {
    IAuth.LoginSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6)
    });
    IAuth.RegisterSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
        firstName: z.string().nonempty(),
        lastName: z.string().nonempty(),
        businessName: z.string().nonempty().min(3),
        businessCountry: z.string().nonempty(),
        businessCurrency: z.string().nonempty()
    });
    IAuth.ForgotPasswordSchema = z.object({
        email: z.string().email()
    });
    IAuth.ResetPasswordSchema = z
        .object({
        password: z.string().min(6),
        confirmPassword: z.string().min(6)
    })
        .refine(function (data) { return data.password === data.confirmPassword; }, {
        message: 'auth.passwordMissmatch',
        path: ['confirmPassword']
    });
})(IAuth = exports.IAuth || (exports.IAuth = {}));
