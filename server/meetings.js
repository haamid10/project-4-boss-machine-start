
const meetingRouter = require('express').Router()
module.exports = meetingRouter;


const {createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase} = require('./db');





meetingRouter.get('/',  (req, res)=>{
    res.send(getAllFromDatabase('meetings'));
})

meetingRouter.post('/', (req, res)=>{      
        const newMinion =  addToDatabase('meetings', createMeeting());
        res.status(201).send(newMinion);
    });
meetingRouter.delete('/',  (req, res) => {
        deleteAllFromDatabase('meetings');
        res.status(204).send()
    } )