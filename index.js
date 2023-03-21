const { app, express } = require('./js/routes.js')
app.use('/view/', express.static('./view'))
app.use('/scripts/css/', express.static('./scripts/css/'))
app.use('/scripts/javascript/', express.static('./scripts/javascript/'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, (err, done)=>{
    if(!err){
        console.log({ message: 'success' })
    }
})