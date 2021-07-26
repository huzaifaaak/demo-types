import * as z from 'zod';
import { ItemVariant } from '../prisma-client';
export declare namespace IItemVariant {
    const CreateSchema: z.ZodObject<{
        name: z.ZodString;
        price: z.ZodNumber;
    }, "passthrough", z.ZodTypeAny, {
        name: string;
        price: number;
    }, {
        name: string;
        price: number;
    }>;
    type CreateArgs = z.infer<typeof CreateSchema>;
    const UpdateSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        price: z.ZodOptional<z.ZodNumber>;
    }, "passthrough", z.ZodTypeAny, {
        name?: string | undefined;
        price?: number | undefined;
    }, {
        name?: string | undefined;
        price?: number | undefined;
    }>;
    type UpdateArgs = z.infer<typeof UpdateSchema>;
    type GetReturn = ItemVariant;
    type ListReturn = GetReturn[];
    type CreateReturn = ItemVariant;
    type UpdateReturn = ItemVariant;
    type DeleteReturn = ItemVariant;
}
