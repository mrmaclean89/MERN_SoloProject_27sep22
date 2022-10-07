const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Job name required."]
    },
    photo:{
        type:String
    },
    description:{
        type:String,
        required:[true,"Description of problem is required."]
    },
    instructions:{
        type:String
    },
    materials:{
        type:String
    },
    tools:{
        type:String
    },
    time:{
        type:Number
    },
    frequency:{
        type:String
    }
},{timestamps:true})

const Job = mongoose.model("Job", JobSchema)

module.exports = Job