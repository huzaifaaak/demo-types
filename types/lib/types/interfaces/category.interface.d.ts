import * as z from 'zod';
import { Category, CatalogTag, Item } from '../prisma-client';
export declare namespace ICategory {
    type CountData = ['items'];
    const CreateSchema: z.ZodObject<{
        name: z.ZodString;
        isActive: z.ZodTransformer<z.ZodOptional<z.ZodBoolean>, z.ZodBoolean>;
        picture: z.ZodTransformer<z.ZodOptional<z.ZodNullable<z.ZodString>>, z.ZodNullable<z.ZodString>>;
        isDefault: z.ZodTransformer<z.ZodOptional<z.ZodBoolean>, z.ZodBoolean>;
        newTags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        existingTags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, {
        newTags?: string[] | undefined;
        existingTags?: string[] | undefined;
        isDefault: boolean;
        isActive: boolean;
        name: string;
        picture: string | null;
    }, {
        isDefault?: boolean | undefined;
        isActive?: boolean | undefined;
        picture?: string | null | undefined;
        newTags?: string[] | undefined;
        existingTags?: string[] | undefined;
        name: string;
    }>;
    const UpdateSequenceSchema: z.ZodObject<{
        categories: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            sequence: z.ZodNumber;
        }, "passthrough", z.ZodTypeAny, {
            id: string;
            sequence: number;
        }, {
            id: string;
            sequence: number;
        }>>;
    }, "passthrough", z.ZodTypeAny, {
        categories: {
            id: string;
            sequence: number;
        }[];
    }, {
        categories: {
            id: string;
            sequence: number;
        }[];
    }>;
    type CreateArgs = z.infer<typeof CreateSchema>;
    const UpdateSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        isActive: z.ZodOptional<z.ZodTransformer<z.ZodOptional<z.ZodBoolean>, z.ZodBoolean>>;
        picture: z.ZodOptional<z.ZodTransformer<z.ZodOptional<z.ZodNullable<z.ZodString>>, z.ZodNullable<z.ZodString>>>;
        isDefault: z.ZodOptional<z.ZodTransformer<z.ZodOptional<z.ZodBoolean>, z.ZodBoolean>>;
        newTags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        existingTags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, "passthrough", z.ZodTypeAny, {
        isDefault?: boolean | undefined;
        isActive?: boolean | undefined;
        name?: string | undefined;
        picture?: string | null | undefined;
        newTags?: string[] | undefined;
        existingTags?: string[] | undefined;
    }, {
        isDefault?: boolean | undefined;
        isActive?: boolean | undefined;
        name?: string | undefined;
        picture?: string | null | undefined;
        newTags?: string[] | undefined;
        existingTags?: string[] | undefined;
    }>;
    type UpdateArgs = z.infer<typeof UpdateSchema>;
    type UpdateSequenceArgs = z.infer<typeof UpdateSequenceSchema>;
    type GetReturn = Category & {
        tags: CatalogTag[];
        _count: {
            items: number;
        };
    };
    type ListReturn = GetReturn[];
    type CreateReturn = Category & {
        tags: CatalogTag[];
        _count: {
            items: number;
        };
    };
    type UpdateReturn = Category & {
        tags: CatalogTag[];
        _count: {
            items: number;
        };
    };
    type DeleteReturn = Category;
    type GetItemsReturn = (Item & {
        tags: CatalogTag[];
    })[];
    type UpdateSequenceReturn = Category[];
}
