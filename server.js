require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Weather API Route
app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) return res.status(400).json({ error: "City is required" });

    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod !== 200) {
            return res.status(400).json({ error: data.message });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
