const express = require('express')
const cors = requiere ('cors');
const tablero = require('./routes/boardRoutes')
const lista = require('./routes/listRoutes')
const tarea = require('./routes/taskRoutes')
const usuario = require('./routes/userRoutes')
const app = express()

app.set('port', process.env.PORT || 4000);


const listaRutas = ["http://localhost:3000"]


const corsOptions = {
  origin: function(origin, callback) {
    if(!origin || listaRutas.indexOf(origin) !== -1){
        callback(null, true)
    } else {
      callback(new Error("No soportable por CORS"))
    }
  },
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/board", tablero)
app.use("/list",lista)
app.use("/task",tarea)
app.use("/user",usuario)

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});