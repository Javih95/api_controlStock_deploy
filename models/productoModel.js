import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const productoModel = sqliteTable("Products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  art: text("art").notNull(),
  descripcion: text("descripcion").notNull(),
  quantity: integer("quantity").notNull(),
});
export default productoModel;
