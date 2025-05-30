const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/matches', async (req, res) => {
    try {
        const response = await axios.get('https://www.thesportsdb.com/api/v1/json/3/eventspastleague.php?id=4387');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching matches:', error);
        res.status(500).json({ error: 'Failed to fetch matches' });
    }
});

app.get('/', (req, res) => {    
    res.send(`Server is running on port ${port}. Use /api/matches to get the matches.`);
        
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});