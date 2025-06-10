import { Pool } from 'pg';

// Define Player type locally if not available from shared types
export type Player = {
    id?: number;
    name: string;
    hits: number;
    homeRuns: number;
    description: string;
};

const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'baseball_stats',
    password: 'your_password',
    port: 5432,
});

export const getPlayersModel = async (): Promise<Player[]> => {
    const result = await pool.query('SELECT * FROM players');
    return result.rows;
};

export const getPlayerById = async (id: string): Promise<Player | null> => {
    const result = await pool.query('SELECT * FROM players WHERE id = $1', [id]);
    return result.rows.length ? result.rows[0] : null;
};

export const createPlayer = async (player: Player): Promise<Player> => {
    const result = await pool.query(
        'INSERT INTO players (name, hits, homeRuns, description) VALUES ($1, $2, $3, $4) RETURNING *',
        [player.name, player.hits, player.homeRuns, player.description]
    );
    return result.rows[0];
};

export const updatePlayer = async (id: string, player: Player): Promise<Player | null> => {
    const result = await pool.query(
        'UPDATE players SET name = $1, hits = $2, homeRuns = $3, description = $4 WHERE id = $5 RETURNING *',
        [player.name, player.hits, player.homeRuns, player.description, id]
    );
    return result.rows.length ? result.rows[0] : null;
};

export const deletePlayer = async (id: number): Promise<void> => {
    await pool.query('DELETE FROM players WHERE id = $1', [id]);
};