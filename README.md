# Soccer Matches Web App

Displays recent English Premier League matches using TheSportsDB API.

## Setup Instructions

1. **Backend Setup**:
   - Navigate to the `server` directory: `cd server`
   - Install dependencies: `npm install`
   - Start the server: `npm start`

2. **Frontend Setup**:
   - Open `client/index.html` in a web browser.
   - Ensure the backend server is running to fetch data.

3. **API Used**:
   - Endpoint: [https://www.thesportsdb.com/api/v1/json/3/eventspastleague.php?id=4328](https://www.thesportsdb.com/api/v1/json/3/eventspastleague.php?id=4328)
   - Returns past matches for the English Premier League.

## Notes
- The backend runs on `http://localhost:3000`.
- The frontend fetches data from the backend and displays matches in a clean, card-based layout.
# Soccer Matches Web App

Displays past English Premier League matches using TheSportsDB API.

## Setup Instructions

1. **Backend Setup**:
   - Navigate to the `server` directory: `cd server`
   - Install dependencies: `npm install`
   - Start the server: `npm start`

2. **Frontend Setup**:
   - Open `client/index.html` in a web browser.
   - Ensure the backend server is running to fetch data.

3. **API Used**:
   - Endpoint: [https://www.thesportsdb.com/api/v1/json/3/eventspastleague.php?id=4328](https://www.thesportsdb.com/api/v1/json/3/eventspastleague.php?id=4328)
   - Returns upcoming matches for the English Premier League.

## Notes
- The backend runs on `http://localhost:3000`.
- The frontend fetches data from the backend and displays matches in a clean, card-based layout.
- Dates and times are converted from UTC to the user's local time.
