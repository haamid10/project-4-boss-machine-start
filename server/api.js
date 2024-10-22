const express = require('express');
const apiRouter = express.Router();
const minnionRouter = require('./minion')
const ideasRouter = require('./Ideas')
const meetingRouter = require('./meetings')

// new ideas

apiRouter.use('/minion', minnionRouter)
apiRouter.use('/ideas', ideasRouter)
apiRouter.use('/meetings', meetingRouter)


// meetings

    

module.exports = apiRouter;
