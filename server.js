const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Define API routes here

app.get("api/sativa/strains", function (req, res) {
  //database query to get all sativa strains
  res.json([])
});

appp.get("api/indica/strains", function (req, res) {
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

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
