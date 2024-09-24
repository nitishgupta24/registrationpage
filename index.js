const express = require('express');
const path = require('path');
const app = express();
//connection();
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname,'public')));
app.get('/', (req, res) => {
    res.render('base',{title:"Login System"})
})
app.listen(3001, (err) => {
    if (err) {
        console.log("err");
    } else {
        console.log("server is running...");
    }
})
