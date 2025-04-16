require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8000;
const cookieParser = require('cookie-parser');
const adminRouter = require('./routers/admin');
const userRouter = require('./routers/user');
const infoRouter = require('./routers/info');
const connectMongoDb = require('./dbConfig');

connectMongoDb(process.env.MONGO_URL).then(()=> console.log("connect MongoDB.."));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,"public")));
app.set('view engine','ejs');

app.use("/", adminRouter);
app.use("/user", userRouter);
app.use("/info", infoRouter);

app.listen(PORT, ()=> console.log(`server start port number ${PORT}`));