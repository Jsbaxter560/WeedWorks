var app = require("express").Router()


// Define API routes here

app.get("api/sativa/strains", function (req, res) {
    //database query to get all sativa strains
    res.json([])
  });
  
  app.get("api/indica/strains", function (req, res) {
    //database query to get all indica strains
    res.json([])
  });
  
  app.get("api/hybrid/strains", function (req, res) {
    //database query to get all hybrid strains
    res.json([])
  });
  
  app.get("api/strains/:id", function (req, res) {
    //database query to get strain by id?
    res.json([])
  });
  
  app.post("api/pages/profilepage", function (req, res) {
    //database querry to update favorites list
    res.json([])
  });

  module.exports = app;
  