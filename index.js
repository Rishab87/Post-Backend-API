const express = require('express');
app = express();

require('dotenv').config();

const port = process.config.env || 4000;

app.use(express.json());

const router = require("./routes/postRoutes");

app.use("/api/v1" , router);

app.listen(port , ()=>{
    console.log(`server started successfully ${port}`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/" , (req, res)=>{
    res.send("<h1>Welcome Home!</h1>");
});