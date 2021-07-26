import * as z from 'zod';
import { CatalogTag, Category, Item } from '../prisma-client';
export declare namespace IItem {
    const QuerySchema: z.ZodObject<{
        catalogId: z.ZodOptional<z.ZodString>;
        categoryId: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, {
        catalogId?: string | undefined;
        categoryId?: string | undefined;
    }, {
        catalogId?: string | undefined;
        categoryId?: string | undefined;
    }>;
    const CreateSchema: z.ZodObject<{
        categoryId: z.ZodString;
        name: z.ZodString;
        price: z.ZodNumber;
        discount: z.ZodOptional<z.ZodNumber>;
        description: z.ZodOptional<z.ZodString>;
        picture: z.ZodOptional<z.ZodString>;
        newTags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        existingTags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, {
        picture?: string | undefined;
        newTags?: string[] | undefined;
        existingTags?: string[] | undefined;
        discount?: number | undefined;
        description?: string | undefined;
        name: string;
        price: number;
        categoryId: string;
    }, {
        picture?: string | undefined;
        newTags?: string[] | undefined;
        existingTags?: string[] | undefined;
        discount?: number | undefined;
        description?: string | undefined;
        name: string;
        price: number;
        categoryId: string;
    }>;
    type CreateArgs = z.infer<typeof CreateSchema>;
    const UpdateSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        picture: z.ZodOptional<z.ZodString>;
        newTags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        existingTags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        price: z.ZodOptional<z.ZodNumber>;
        discount: z.ZodOptional<z.ZodNumber>;
        description: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, {
        name?: string | undefined;
        picture?: string | undefined;
        newTags?: string[] | undefined;
        existingTags?: string[] | undefined;
        price?: number | undefined;
        discount?: number | undefined;
        description?: string | undefined;
    }, {
        name?: string | undefined;
        picture?: string | undefined;
        newTags?: string[] | undefined;
        existingTags?: string[] | undefined;
        price?: number | undefined;
        discount?: number | undefined;
        description?: string | undefined;
    }>;
    type UpdateArgs = z.infer<typeof UpdateSchema>;
    type GetReturn = Item & {
        category: Pick<Category, 'id' | 'name'>;
        tags: CatalogTag[];
    };
    type ListReturn = GetReturn[];
    type CreateReturn = Item & {
        tags: CatalogTag[];
    };
    type UpdateReturn = Item & {
        tags: CatalogTag[];
    };
    type DeleteReturn = Item;
}
