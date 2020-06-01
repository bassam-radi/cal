const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))

app.get(("/"), (req, res) => res.sendfile(__dirname + "/index.html"))

app.post(("/"), (req, res) =>{
    const num1 = +(req.body.number01);
    const num2 = +(req.body.number02);
    const add = num1 + num2;
    res.send(add.toString())
})

app.listen(port, () => console.log(`the server has been started at port: ${port}`))