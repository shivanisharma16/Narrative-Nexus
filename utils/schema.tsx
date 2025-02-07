import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput=pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData'),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug').notNull(),
    createBy:varchar('createBy'),
    createAt:varchar('createdAT'),
})