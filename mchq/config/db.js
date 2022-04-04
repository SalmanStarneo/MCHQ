const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,
    {newURlParser: true,
     useUnifiedTopology: true,}).then(() => {
        console.log("DB Connected");
     }).catch((err)=> console.log(err));