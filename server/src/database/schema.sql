CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    hits INT DEFAULT 0,
    home_runs INT DEFAULT 0,
    description TEXT
);