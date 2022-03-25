const express = require('express')
const cors = requiere ('cors');
const tablero = require('./routes/boardRoutes.js')
const lista = require('./routes/listRoutes.js')
const tarea = require('./routes/taskRoutes.js')
const usuario = require('./routes/userRoutes.js')
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
app.use("/user",usuario) //faltan agregar las app.use para boardList, listTask y userBoard

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});