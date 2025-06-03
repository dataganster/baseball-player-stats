import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Player } from '../types/player';

const PlayerDetail: React.FC = () => {
    const { playerId } = useParams<{ playerId: string }>();
    const [player, setPlayer] = useState<Player | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPlayerDetails = async () => {
            try {
                const response = await fetch(`/api/players/${playerId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch player details');
                }
                const data: Player = await response.json();
                setPlayer(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPlayerDetails();
    }, [playerId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!player) {
        return <div>No player found</div>;
    }

    return (
        <div>
            <h2>{player.name}</h2>
            <p>Hits: {player.hits}</p>
            <p>Home Runs: {player.homeRuns}</p>
            <p>Description: {player.description}</p>
        </div>
    );
};

export default PlayerDetail;