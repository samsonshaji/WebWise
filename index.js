const path = require('path');

const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5001;

const apiKey = '83ac3b26ea4fe1001153943b06f210f5';
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

//const apiKey = `https://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;
//const generateScraperUrl = (apiKey) => `https://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Amazon Scraper API.');
});

//Get Product Details
app.get('/products/:productId', async (req, res) => {
    const { productId } = req.params;
    //const { api_key } = req.query;

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
        
    }
});

//Get Product Reviews
app.get('/products/:productId/reviews', async (req, res) => {
    const { productId } = req.params;
    
    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`);

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
        
    }
});

//Get Product Offers
app.get('/products/:productId/offers', async (req, res) => {
    const { productId } = req.params;
    

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/gp/offer-listing/${productId}`);

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
        
    }
});

//Get Search Results
app.get('/search/:searchQuery', async (req, res) => {
    const { searchQuery } = req.params;
    

    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/s?k=${searchQuery}`);

        res.json(JSON.parse(response));
    } catch (error) {
        res.json(error);
        
    }
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.use((req, res) => {
        res.status(404).send('Route not found');
        });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));