const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://'+ process.env.DB_USER_PASS+'@cluster0.2mvyrz9.mongodb.net/mern-project',
{
	useNewUrlParser: true, useUnifiedTopology:true
})
.then(()=>console.log('Connected to Mongodb'))
.catch((err)=> console.log("failed :", err));