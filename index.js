const express = require('express');
const app = express();
const dir = { root: `${__dirname}/static` };
app.use(express.static("external"));

app.get('/', (req, res) => {
  res.sendFile("/index.html", dir);
});

app.get("/invite", (req, res) => {
  res.redirect("https://discord.com/oauth2/authorize?client_id=563186108712878090&permissions=805694591&scope=bot%20applications.commands");
});

app.get("*", (req, res) => {
  res.send("404 - Page not Found!").status(404)
});

app.post("*", (req, res) => {
  res.json({ "error": "Page not Found! "});
});

app.listen(3000, () => {
  console.log('server started');
});
