const express = require(`express`);
const app = express();

//configuraciones
app.set(`port`, process.env.PORT || 4000);
// si en caso existe un puerto predeterminado utilizara ese de lo contrario el puerto 3000

//iniciando servidor
app.listen(app.get(`port`), () => {
  console.log(`Server on port ${app.get(`port`)}`);
});
