const express = require('express')
const personaRutas = require('./routes/personalRoutes')
const app = express()

app.set('port', process.env.PORT || 4000);
app.use(express.json())

app.use("/", personaRutas)

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });