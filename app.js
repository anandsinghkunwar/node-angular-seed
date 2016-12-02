var express = require('express')
var app = express()

/* Setting Templating Engine as Pug */
app.set('view engine', 'pug')

/* Serving Static Files */
app.use('/static', express.static('static'))

/* Different Routes */
app.get('/', function (req, res) {
    console.log(process.env.NODE_ENV)
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
