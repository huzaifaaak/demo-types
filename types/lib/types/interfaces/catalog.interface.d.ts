import * as z from 'zod';
import { Catalog } from '../prisma-client';
export declare namespace ICatalog {
    type CountData = ['categories', 'items'];
    const CreateSchema: z.ZodObject<{
        title: z.ZodString;
        isDefault: z.ZodTransformer<z.ZodOptional<z.ZodBoolean>, z.ZodBoolean>;
        isActive: z.ZodTransformer<z.ZodOptional<z.ZodBoolean>, z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, {
        title: string;
        isDefault: boolean;
        isActive: boolean;
    }, {
        isDefault?: boolean | undefined;
        isActive?: boolean | undefined;
        title: string;
    }>;
    type CreateArgs = z.infer<typeof CreateSchema>;
    type GetReturn = Catalog;
    type ListReturn = GetReturn[];
}
