
const ideasRouter = require('express').Router()
module.exports = ideasRouter;
const checkMillionDollarIdea = require('./checkMillionDollarIdea')


const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase} = require('./db')

ideasRouter.param('/:ideasId', (req, res, next, id)=> {
    const ideas = getFromDatabaseById('ideas', id);
    if(ideas){
        req.ideas = ideas;
        next();
    } else {
        res.status(404).send();
    }

})

ideasRouter.get('/', async (req, res)=>{
    res.send(getAllFromDatabase('ideas'));
})
ideasRouter.get('/:IdeasId', async(req, res)=>{
   res.send(req.ideas)
})

ideasRouter.post('/',checkMillionDollarIdea, (req, res)=>{
    const newMinion =  addToDatabase('ideas', req.body);
    res.status(201).send(newMinion);
});


ideasRouter.put('/:ideasId', checkMillionDollarIdea, (req, res)=>{
    const updatedMinion =  updateInstanceInDatabase('ideas', req.body);
    if(updatedMinion){
        res.send(updatedMinion);
    } else {
        res.status(404).send();
    }
})

ideasRouter.delete('/:ideasId', (req, res)=>{
    const deletedMinion =  deleteFromDatabasebyId('ideas', req.params.id);
    if(deletedMinion){
        res.status(204)
    } else {
        res.status(404)
    }
    res.send()
})

