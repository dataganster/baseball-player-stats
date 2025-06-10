# Baseball Stats App

This is a full-stack web application for displaying baseball player statistics. The application is built using React for the front-end, Node.js with Express for the back-end, and PostgreSQL for the database.

## Project Structure

```
baseball-stats-app
├── client                # Front-end application
│   ├── public
│   │   └── index.html    # Main HTML file
│   ├── src
│   │   ├── components     # React components
│   │   │   └── PlayerDetail.tsx
│   │   ├── types          # TypeScript types
│   │   │   └── player.ts
│   │   ├── App.tsx        # Main application component
│   │   └── index.tsx      # Entry point for React application
│   ├── package.json       # Client package metadata
│   └── tsconfig.json      # TypeScript configuration for client
├── server                # Back-end application
│   ├── src
│   │   ├── controllers     # Controller functions for handling requests
│   │   │   └── playerController.ts
│   │   ├── models          # Database models
│   │   │   └── playerModel.ts
│   │   ├── routes          # API routes
│   │   │   └── playerRoutes.ts
│   │   ├── db             # Database connection
│   │   │   └── index.ts
│   │   └── app.ts         # Entry point for server application
│   ├── package.json       # Server package metadata
│   └── tsconfig.json      # TypeScript configuration for server
├── database               # Database schema
│   ├── schema.sql
│   └── initdb.d           # Initialization scripts for Docker
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile.client       # Dockerfile for client
├── Dockerfile.server       # Dockerfile for server
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- Docker (optional, for containerization)

### Installation

1. Clone the repository:

   ```
   git clone [<repository-url>](https://github.com/dataganster/baseball-player-stats)
   cd baseball-stats-app
   ```

2. Set up the database:

   - Create a PostgreSQL database and user.
   - Run the SQL schema in `database/schema.sql` to set up the necessary tables.
   ```
   npm install pg
   ```
   - If using Docker, place your schema or initialization scripts in `database/initdb.d/` so they are run automatically.

3. Install dependencies for the server:

   ```
   cd server
   npm install
   ```

4. Install dependencies for the client:

   ```
   cd client
   npm install
   ```

### Running the Application

To run the application, you can either use Docker or run the client and server separately.

#### Using Docker

1. Build and run the containers:

   ```
   docker-compose up --build
   ```

#### Running Separately

1. Start the server:

   ```
   cd server
   npm run start
   ```

2. Start the client:

   ```
   cd client
   npm run start
   ```

### Usage

- Navigate to `http://localhost:3000` to view the application.
- The application will display a list of baseball players along with their statistics.
- Click on a player to view detailed information and edit their data.

### Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

### License

This project is licensed under the MIT License.
