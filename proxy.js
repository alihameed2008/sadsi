const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/proxy', async (req, res) => {
    try {
        const response = await axios.get('https://iframe.mediadelivery.net/embed/215061/adf7c94e-3d90-4ecc-be72-c355e396480c?autoplay=true&loop=false&muted=false&preload=true&responsive=true', {
            headers: {
                Referer: 'https://iframe.mediadelivery.net/'
            }
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching the video');
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});