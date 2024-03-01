const express= require('express')
const {connectToMongoDB}=require("./connect");
const urlRoute=require("./routes/url");
const app=express();
const PORT = 5000;
connectToMongoDB('mongodb://localhost:27017/urlshort').then(()=>console.log('connect'));
app.use('/url', urlRoute);

app.listen(PORT, ()=> console.log('server started'));