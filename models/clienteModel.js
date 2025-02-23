
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const clienteModel = sqliteTable("Clientes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nombre: text("nombre").notNull(),
  direccion: text("direccion").notNull(),
  telefono: text("telefono").notNull(),
});
export default clienteModel;
