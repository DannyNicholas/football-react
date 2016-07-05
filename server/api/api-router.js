const express = require('express');
const repository = require('../in-memory/team-repository')

/*
 * Routes for our API
 */
const router = express.Router();

// top-level api message
router.get('/', (req, res) => {
  res.json({"message": "welcome to our api."});
});

// get all teams
router.get('/team', (req, res) => {
   res.json(repository.teamRepository.getAll())
});

// get goals for wanted team
router.get('/team/:id', (req, res) => {
   res.json(repository.teamRepository.getGoals(req.params.id))
});

module.exports = router