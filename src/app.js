const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/restaurants", async (request, response) =>{
    const restaurant = await Restaurant.findAll();
    response.json(restaurant);
});

// CREATE
app.post("/restaurants", async (req, res) => {
    const restaurant = Restaurant.create(req.body);
    res.json(restaurant);
});

//READ
app.get("/restaurants/:id", async (req, res) =>{
    const number = req.params.id;
    const restaurant = await Restaurant.findByPk(number);
    res.json(restaurant); 
});

//UPDATE
app.put("/restaurants/:id", async (req, res) => {
    const updatedRest = await Restaurant.update(req.body, {where: {id: req.params.id}});
    res.json(updatedRest);
});

//DELETE
app.delete("/restaurants/:id", async (req, res) => {
    const deletedRest = await Restaurant.destroy({where: {id: req.params.id}});
    res.json(deletedRest);
});

module.exports = app;