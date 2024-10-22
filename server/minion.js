const minnionRouter = require('express').Router();

module.exports = minnionRouter;


const {createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase} = require('./db')


    minnionRouter.param('/:minionId', (req, res, next, id)=> {

        const minion = getFromDatabaseById('minions', id);
        if(minion){
            req.minion = minion;
            next();
        } else {
            res.status(404).send();
        }
    })


minnionRouter.get('/',  (req, res)=>{
    res.send(getAllFromDatabase('minions'));
    console.log(getAllFromDatabase)
})
minnionRouter.get('/minionId', (req, res)=>{
    res,send(req.minion)
})

minnionRouter.post('/', (req, res)=>{
    
    const newMinion =  addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});


minnionRouter.put('/minionId', (req, res)=>{
    let updatedMinion =  updateInstanceInDatabase('minions', req.body);
        res.send(updatedMinion);
})

minnionRouter.delete('/minionId', (req, res)=>{
    const deletedMinion =  deleteFromDatabasebyId('minions', req.params.minionId);
    if(deletedMinion){
        res.status(204)
    } else {
        res.status(404)
    }
    res.send()
})
minnionRouter.delete('/minions',  (req, res) => {
    const deletedMinions =  deleteAllFromDatabase('minions');
    if (deletedMinions) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
} )