const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
// app.use(cors());
mongoose.connect(process.env.MONGODB_URI,
    {useNewURLParser: true,
     useUnifiedTopology: true}).then(() => {
        console.log("DB Connected");
     }).catch((err)=> console.log(err));