require("dotenv").config({path:"../../.env"});
const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/postlist`,{useNewUrlParser:true,useUnifiedTopology:true})