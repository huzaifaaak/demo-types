import * as z from 'zod';
export declare namespace IAuth {
    export const LoginSchema: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
    }, "passthrough", z.ZodTypeAny, {
        email: string;
        password: string;
    }, {
        email: string;
        password: string;
    }>;
    export type LoginArgs = z.infer<typeof LoginSchema>;
    export const RegisterSchema: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
        firstName: z.ZodString;
        lastName: z.ZodString;
        businessName: z.ZodString;
        businessCountry: z.ZodString;
        businessCurrency: z.ZodString;
    }, "passthrough", z.ZodTypeAny, {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        businessName: string;
        businessCountry: string;
        businessCurrency: string;
    }, {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        businessName: string;
        businessCountry: string;
        businessCurrency: string;
    }>;
    export type RegisterArgs = z.infer<typeof RegisterSchema>;
    export const ForgotPasswordSchema: z.ZodObject<{
        email: z.ZodString;
    }, "passthrough", z.ZodTypeAny, {
        email: string;
    }, {
        email: string;
    }>;
    export type ForgotPasswordArgs = z.infer<typeof ForgotPasswordSchema>;
    export const ResetPasswordSchema: z.ZodObject<{
        password: z.ZodString;
        confirmPassword: z.ZodString;
    }, "passthrough", z.ZodTypeAny, {
        password: string;
        confirmPassword: string;
    }, {
        password: string;
        confirmPassword: string;
    }>;
    export type ResetPasswordArgs = z.infer<typeof ResetPasswordSchema>;
    interface AuthReturn {
        accessToken: string;
        refreshToken: string;
    }
    export type LoginReturn = AuthReturn;
    export type RegisterReturn = AuthReturn;
    export type RefreshTokenReturn = AuthReturn;
    export interface ForgotPasswordReturn {
        message: string;
        token: string;
    }
    export interface ResetPasswordReturn {
        message: string;
    }
    export {};
}
