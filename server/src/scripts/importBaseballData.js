import fetch from 'node-fetch';
import { Pool } from 'pg';

const API_URL = 'https://api.hirefraction.com/api/test/baseball';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/baseball',
});

async function importData() {
  const res = await fetch(API_URL);
  const players = await res.json();

  if (!Array.isArray(players)) {
    throw new Error('API response is not an array');
  }

  for (const player of players) {
    await pool.query(
      `INSERT INTO player (id, name, team, position, games_played, at_bats, hits, home_runs, rbi, batting_average)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       ON CONFLICT (id) DO NOTHING`,
      [
        player.id,
        player.name,
        player.team,
        player.position,
        player.games_played,
        player.at_bats,
        player.hits,
        player.home_runs,
        player.rbi,
        player.batting_average
      ]
    );
  }

  await pool.end();
  console.log('Import complete!');
}

importData().catch(console.error);
