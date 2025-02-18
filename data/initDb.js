const db = require("./db");

(async () => {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS Clientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        direccion TEXT NOT NULL,
        telefono TEXT NOT NULL
      )
    `);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS Materials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        art TEXT NOT NULL,
        tipo TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 0
      )
    `);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS Products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        art TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 0
      )
    `);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS Pedidos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        clienteId INTEGER NOT NULL,
        productos TEXT NOT NULL, -- JSON almacenado como string
        fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        entregado BOOLEAN NOT NULL DEFAULT 0,
        FOREIGN KEY (clienteId) REFERENCES Clientes(id) ON DELETE CASCADE
      )
    `);

    console.log("📌 Tablas creadas exitosamente.");
  } catch (error) {
    console.error("❌ Error al crear las tablas:", error);
  }
})();
