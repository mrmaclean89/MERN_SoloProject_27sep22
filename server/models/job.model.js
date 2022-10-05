const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Pet name required!"],
        minLength:[3,"Sorry, pet name must be at least 3 letters!"]
    },
    type:{
        type:String,
        required:[true,"Pet type is required!"],
        minLength:[3, "Type must be at least 3 characters!"]
    },
    description:{
        type:String,
        required:[true,"Pet description is required!"],
        minLength:[3, "Description must be at least 3 characters!"]
    },
    skill1:{
        type:String
    },
    skill2:{
        type:String
    },
    skill3:{
        type:String
    }
},{timestamps:true})

const Pet = mongoose.model("Pet", PetSchema)

module.exports = Pet