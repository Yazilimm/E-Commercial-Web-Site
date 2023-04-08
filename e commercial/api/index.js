const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routers/user");
const authRoute = require("./routers/auth");
const productRoute = require("./routers/product");
const cartRoute = require("./models/Cart");
const orderRoute = require("./models/Order");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB Connected")
})
.catch((err)=>{
    console.log(err)
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

app .listen(process.env.PORT ||5000, ()=>{
    console.log("Backend server is running");
});

