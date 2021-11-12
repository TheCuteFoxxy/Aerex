const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views')

app.get('/', (req, res) => {
  res.render("index");
});

app.get("/invite", (req, res) => {
  res.redirect("https://discord.com/oauth2/authorize?client_id=563186108712878090&permissions=805694591&scope=bot%20applications.commands");
});

app.all("*", (req, res) => {
  res.status(404).send({ status: 404, message: 'Not Found'})
});

app.listen(3000, () => {
  console.log('server started');
});
