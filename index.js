const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes"); //arquivo nomeia a rota
const port = require("./port")

const app = express();

mongoose.connect('mongodb+srv://dbUser:<>@cluster0.o6epbot.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) .then(() => {
  console.log('Conectado ao MongoDB').catch(err => console.log(err));
})
app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`servidor esta na porta ${port}`); //template.string
})
