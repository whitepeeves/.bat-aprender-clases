const express = require("express");
const path = require("path");
const app = express();

// Al abrir la raíz del enlace se descarga el .bat
app.get("/", (req, res) => {
  res.download(path.join(__dirname, "archivos", "descargar.bat"));
});

// Opcional: cualquier archivo dentro de /archivos queda en /files/<nombre>
app.use("/files", express.static(path.join(__dirname, "archivos"), {
  setHeaders: (res) => res.setHeader("Content-Disposition", "attachment")
}));

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => console.log("Servidor en puerto " + port));
