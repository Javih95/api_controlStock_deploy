# 🛠️ API de Gestión (Backend)

API REST desarrollada en **Node.js + Express.js** que gestiona productos, materiales, pedidos y clientes.  
Conecta a una base de datos remota **SQLite alojada en Turso** y permite realizar operaciones CRUD desde el frontend.  

---

## 🚀 Tecnologías
- [Node.js]
- [Express.js]
- [SQLite (Turso)]
- [Drizzle]

---

## ✨ Endpoints principales

- **Productos** → `/productos`  
- **Materiales** → `/materiales`  
- **Pedidos** → `/pedidos`  
- **Clientes** → `/clientes`  

Ejemplo de petición:  

```bash
GET /productos
Respuesta:
[
  {
    "id": 1,
    "art": "Producto A",
    "descripcion": 100,
    "quantity":3
  },
  {
    "id": 2,
    "art": "Producto B",
    "descripcion": 200,
    "quantity":10
  }
]
⚙️ Instalación y uso
git clone https://github.com/Javih95/api_controlStock_deploy.git
cd api_controlStock_deploy
npm install
npm run dev

🔑 Variables de entorno
TURSO_DATABASE_URL=""
TURSO_AUTH_TOKEN=""
