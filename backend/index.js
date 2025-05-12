const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path"); 
const port = process.env.PORT || 5001;
require('dotenv').config();



// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))


// routes
const initiativeRoutes = require('./src/initiative/initiative.route');
const userRoutes =  require("./src/users/user.route")
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/initiative", initiativeRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)


async function main() {
  await mongoose.connect("mongodb+srv://Camilla:12345@cluster0.bedd7du.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  app.use("/", (req, res) => {
    res.send(" Server is running!");
  });
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use('/uploads', express.static(path.join(__dirname,'uploads'), {})); 

