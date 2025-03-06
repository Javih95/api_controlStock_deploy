import { integer, sqliteTable, text} from "drizzle-orm/sqlite-core";

const pedidoModel = sqliteTable("Pedidos", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  clienteId: integer("clienteId").notNull(),
  productos: text("productos").notNull(),
  fecha: text("fecha").notNull().default("CURRENT_TIMESTAMP"), 
  entregado: integer("entregado").notNull().default(0),
});

export default pedidoModel;
