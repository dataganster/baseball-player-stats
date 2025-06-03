import { Request, Response } from 'express';
import { getPlayerById, updatePlayer } from '../models/playerModel';

export const fetchPlayerDetails = async (req: Request, res: Response) => {
    const playerId = req.params.id;
    try {
        const player = await getPlayerById(playerId);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.json(player);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching player details', error: error.message });
    }
};

export const editPlayerData = async (req: Request, res: Response) => {
    const playerId = req.params.id;
    const playerData = req.body;
    try {
        const updatedPlayer = await updatePlayer(playerId, playerData);
        if (!updatedPlayer) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.json(updatedPlayer);
    } catch (error) {
        res.status(500).json({ message: 'Error updating player data', error: error.message });
    }
};