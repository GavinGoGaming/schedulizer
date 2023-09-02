var express = require('express')
var bp = require('body-parser')
var app = express()
app.use(bp.json())
app.use(express.static(__dirname+'/public'))
app.listen(process.env.PORT||3000, ()=>{
    console.log('upnrunning')
})