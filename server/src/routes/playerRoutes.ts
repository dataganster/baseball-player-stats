import express from 'express';
import { getPlayers, getPlayerById, updatePlayer } from '../controllers/playerController';

const router = express.Router();

// Route to get all players
router.get('/', getPlayers);

// Route to get a player by ID
router.get('/:id', getPlayerById);

// Route to update a player's data
router.put('/:id', updatePlayer);

export default router;