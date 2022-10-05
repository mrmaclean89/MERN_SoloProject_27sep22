const PetController = require('../controllers/pet.controller')

const routes = (app)=>{
    app.get('/api', PetController.test)

    //create
    app.post('/api/pets', PetController.create)

    //read
    app.get('/api/pets/:id', PetController.getOne)
    app.get('/api/pets', PetController.getAll)

    //update
    app.put('/api/pets/:id', PetController.updateOne)

    //delete
    app.delete('/api/pets/:id', PetController.deleteOne)
}

module.exports = routes