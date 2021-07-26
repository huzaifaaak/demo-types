import * as z from 'zod';
import { Vendor } from '../prisma-client';
export declare namespace IVendor {
    const CreateSchema: z.ZodObject<{
        name: z.ZodString;
        country: z.ZodString;
        currency: z.ZodString;
    }, "passthrough", z.ZodTypeAny, {
        name: string;
        country: string;
        currency: string;
    }, {
        name: string;
        country: string;
        currency: string;
    }>;
    type CreateArgs = z.infer<typeof CreateSchema>;
    const UpdateSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
        currency: z.ZodOptional<z.ZodString>;
    } & {
        address: z.ZodOptional<z.ZodString>;
        category: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, {
        name?: string | undefined;
        address?: string | undefined;
        category?: string | undefined;
        country?: string | undefined;
        currency?: string | undefined;
    }, {
        name?: string | undefined;
        address?: string | undefined;
        category?: string | undefined;
        country?: string | undefined;
        currency?: string | undefined;
    }>;
    type UpdateArgs = z.infer<typeof UpdateSchema>;
    type GetReturn = Vendor;
    type CreateReturn = Vendor;
    type UpdateReturn = Vendor;
    type DeleteReturn = Vendor;
}
