import express from 'express';
import { getPlayers, getPlayerByIdController, updatePlayerController} from '../controllers/playerController';

const router = express.Router();

// Route to get all players
router.get('/', getPlayers);

// Route to get a player by ID
router.get('/:id', getPlayerByIdController);

// Route to update a player's data
router.put('/:id', updatePlayerController);

export default router;