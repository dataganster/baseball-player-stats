import { Request, Response } from 'express';
import { error } from 'console';
import { getPlayersModel as getPlayersModel, getPlayerById, updatePlayer } from '../models/playerModel';

// Get all players
export const getPlayers = async (req: Request, res: Response) => {
    try {
        const players = await getPlayersModel();
        res.json(players);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error fetching players:', message);
        // Log the error to a logging service or console
        // You can also implement a logging service to capture this error
        // For example: loggingService.logError('Error fetching players', error);
        // Respond with a 500 status code and the error message
        res.status(500).json({ message: 'Error fetching players', error: message });
    }
};

// Get player by ID
export const getPlayerByIdController = async (req: Request, res: Response) => {
    const playerId = req.params.id;
    try {
        const player = await getPlayerById(playerId);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.json(player);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error fetching player details:', message);
        // Log the error to a logging service or console
        // You can also implement a logging service to capture this error
        // For example: loggingService.logError('Error fetching player details', error);
        // Respond with a 500 status code and the error message
        res.status(500).json({ message: 'Error fetching player details', error: message });
    }
};

// Update player data
export const updatePlayerController = async (req: Request, res: Response) => {
    const playerId = req.params.id;
    const playerData = req.body;
    try {
        const updatedPlayer = await updatePlayer(playerId, playerData);
        if (!updatedPlayer) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.json(updatedPlayer);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';  
        console.error('Error updating player data:', message);
        // Log the error to a logging service or console
        // You can also implement a logging service to capture this error
        // For example: loggingService.logError('Error updating player data', error);
        // Respond with a 500 status code and the error message 
        res.status(500).json({ message: 'Error updating player data', error: message });
    }
};