require("dotenv").config({path :'../.env'});
const { createClient } = require("@libsql/client");

const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

(async () => {
  try {
    await db.execute("SELECT 1");
    console.log("Conexión a Turso exitosa.");
  } catch (error) {
    console.error("Error al conectar con Turso:", error);
  }
})();

module.exports = db;
