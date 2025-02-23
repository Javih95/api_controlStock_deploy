import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const  materialModel = sqliteTable("Materials", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  art:text("art").notNull(),
  tipo: text("tipo").notNull(),
  descripcion: text("descripcion").notNull(),
  quantity:  integer("quantity").notNull(),
});

export default materialModel;