#!/bin/bash
set -e

# Start the server
echo "Starting server..."
npm run start &

# Import data from API into the database (runs in background)
echo "Importing data from API..."
node ./src/scripts/importBaseballData.js

# Wait for background jobs to finish (optional, keeps container running if import finishes before server)
wait