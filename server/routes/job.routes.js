const JobController = require('../controllers/job.controller')

const routes = (app)=>{
    app.get('/api', JobController.test)

    //create
    app.post('/api/jobs', JobController.create)

    //read
    app.get('/api/jobs/:id', JobController.getOne)
    app.get('/api/jobs', JobController.getAll)

    //update
    app.put('/api/jobs/:id', JobController.updateOne)

    //delete
    app.delete('/api/jobs/:id', JobController.deleteOne)
}

module.exports = routes