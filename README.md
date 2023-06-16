Scraper API
This is a simple Node.js application that serves as a Scraper API. It allows you to retrieve product details, reviews, offers, and search results from Amazon using the ScraperAPI service.

Installation
Clone the repository or download the source code.
Install the required dependencies by running npm install in the project directory.
Configuration
Obtain an API key from ScraperAPI.
Replace apiKey in the js file with your ScraperAPI key.
Usage
Start the server by running node <filename>.js in the project directory, replacing <filename> with the name of the JavaScript file.
The server will start running on http://localhost:<port>, where <port> is the specified port or the default port 5001.
Use the provided endpoints to make requests and retrieve data.
Endpoints
GET /products/:productId: Retrieves the details of a specific product on Amazon. Replace :productId with the actual product ID.
GET /products/:productId/reviews: Retrieves the reviews of a specific product on Amazon. Replace :productId with the actual product ID.
GET /products/:productId/offers: Retrieves the offers for a specific product on Amazon. Replace :productId with the actual product ID.
GET /search/:searchQuery: Retrieves the search results from Amazon based on a specific search query. Replace :searchQuery with the desired search term.
