// QUESTION: If Movie comes from our model.js, why don't we have to import it here? YES

const Pet = require('../models/pet.model')

const PetController = {
    test:(req,res)=>{
        res.json({message:"Hello World"})
    },
    //CREATE
    create:(req,res)=>{
        Pet.create(req.body)
        .then((pet)=>{
            res.status(201).json({newPet:pet})
        })
        .catch((err)=>{
            res.status(400).json({message:"ERROR with POST", error:err})
        })
    },
    //READ
    getOne:(req,res)=>{
        Pet.find({_id:req.params.id})
        .then((pet)=>{
            res.status(200).json({onePet:pet})
        })
        .catch((err)=>{
            res.status(500).json({message:"ERROR with GET ONE",error:err})
        })
    },
    getAll: (req,res)=>{
        Pet.find({})
        .then((pet)=>{
            res.status(200).json({allPets:pet})
        })
        .catch((err)=>{
            res.status(500).json({message:"ERROR with GET ALL",error:err})
        })
    },
    //UPDATE
    updateOne: (req,res)=>{
        Pet.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then((pet)=>{
            res.status(200).json({updatedPet:pet})
        })
        .catch((err)=>{
            res.status(400).json({message:"ERROR with UPDATE",error:err})
        })
    },
    //DELETE
    deleteOne: (req,res)=>{
        Pet.findByIdAndDelete({_id:req.params.id})
        .then((pet)=>{
            res.status(200).json({deletedPet:pet})
        })
        .catch((err)=>{
            res.status(500).json({message:"ERROR with DELETE",error:err})
        })
    }
}

module.exports = PetController