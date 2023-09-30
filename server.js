require('dotenv').config();
const express=require('express');
const cors=require('cors')
require('./db/conn');
const Router=require('./router/Router');
const PORT=process.env.PORT || 8080;

const app=express();
app.use(express.json());
app.use(cors());

app.use(Router)

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})

