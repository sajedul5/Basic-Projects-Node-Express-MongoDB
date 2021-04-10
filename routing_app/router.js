const express = require('express');
const route = express.Router();
var colors = require('./database');



//get request
route.get('/colors', (req,res) => {
    res.json({userData:colors});
});

// post request
route.post('/colors', (req,res) => {
    const addColor = req.body;
    colors.push(addColor);
    res.json(colors);
});

// get id request
route.get('/colors/:id',(req, res) => {
    const colorId = Number(req.params.id);
    const getColor = colors.find((color) => color.id === colorId);

    if(!getColor){
        res.status(500).send("Color not found!");
    }else{
        res.json({userData:[getColor]});
    }
});


// put id request
route.put('/colors/:id',(req, res) => {
    const colorId = Number(req.params.id);
    const body = req.body;
    const color = colors.find((color) => color.id === colorId);
    const index = colors.indexOf(color);

    if(!color){
        res.status(500).send("Color not found!");
    }else{
        const updateColor = {...color, ...body};
        //console.log(color, body);
        colors[index] = updateColor
        res.send(updateColor);
    }
});


// delete id request
route.delete('/colors/:id',(req, res) => {
    const colorId = Number(req.params.id);
    const getColor = colors.filter((color) => color.id != colorId);

    if(getColor){
        res.status(500).send("Color not found!");
    }else{
        colors = getColor;
        res.send(colors);
    }
});


module.exports = route;


