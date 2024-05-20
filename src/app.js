const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.get("/restaurants", async (request, response) =>{
    const restaurant = await Restaurant.findAll();
    response.json(restaurant);
})




module.exports = app;