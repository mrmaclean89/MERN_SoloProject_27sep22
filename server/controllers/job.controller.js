// QUESTION: If Movie comes from our model.js, why don't we have to import it here? YES

const Job = require('../models/job.model')

const JobController = {
    test:(req,res)=>{
        res.json({message:"Hello World"})
    },
    //CREATE
    create:(req,res)=>{
        Job.create(req.body)
        .then((job)=>{
            res.status(201).json({newJob:job})
        })
        .catch((err)=>{
            res.status(400).json({message:"ERROR with POST", error:err})
        })
    },
    //READ
    getOne:(req,res)=>{
        Job.find({_id:req.params.id})
        .then((job)=>{
            res.status(200).json({oneJob:job})
        })
        .catch((err)=>{
            res.status(500).json({message:"ERROR with GET ONE",error:err})
        })
    },
    getAll: (req,res)=>{
        Job.find({})
        .then((job)=>{
            res.status(200).json({allJobs:job})
        })
        .catch((err)=>{
            res.status(500).json({message:"ERROR with GET ALL",error:err})
        })
    },
    //UPDATE
    updateOne: (req,res)=>{
        Job.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then((job)=>{
            res.status(200).json({updatedJob:job})
        })
        .catch((err)=>{
            res.status(400).json({message:"ERROR with UPDATE",error:err})
        })
    },
    //DELETE
    deleteOne: (req,res)=>{
        Job.findByIdAndDelete({_id:req.params.id})
        .then((job)=>{
            res.status(200).json({deletedJob:job})
        })
        .catch((err)=>{
            res.status(500).json({message:"ERROR with DELETE",error:err})
        })
    }
}

module.exports = JobController