
var express = require('express');
var Task = require('./models/task');
var IndexRouter = require('./r/index');
const app = express();

const port = 8000;

app.get('/api',function(req,res){
    return res.send('Hello Welcome MEANS!!!');
});

app.listen(port, function(err) {
    if(err){
        console.log("error starting server");
    }
    console.log("server running on port",port);
});

app.use('/api/index',IndexRouter);
