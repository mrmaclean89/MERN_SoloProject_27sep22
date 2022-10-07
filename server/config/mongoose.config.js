const mongoose = require("mongoose")
const db = "YardWizDB"

//console.log(process.env.PW)
//would use this PW if you were using a cloud server, and it would go into line 7 with a URL from AWS

mongoose.connect(`mongodb://localhost/${db}`)
.then(()=>{
    console.log(`${db} CONNECTED`)
})
.catch((err)=>{
    console.log(`FAILED TO CONNECT TO ${db}`)
})