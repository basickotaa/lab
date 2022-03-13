__path = process.cwd();
var favicon = require('serve-favicon');
var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT  || 5000 || 3000 || 8080
var { color } = require('./lib/color.js')

var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(favicon(__path +'/views/favicon.ico'))
app.use(express.static("public"))

app.use('/', mainrouter);
app.use('/api', apirouter);

app.listen(PORT, () => {
    console.log(color("Server running on localhost http://localhost:" + PORT,'green'))
})

module.exports = app
