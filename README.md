# Wiki API

This is a simple RESTful API built using Node.js, Express, and MongoDB. It allows you to perform CRUD (Create, Read, Update, Delete) operations on articles. You can use this API to create, retrieve, update, and delete articles in your wiki.

## Dependencies

The following dependencies are required to run the API:

- [Node.js](https://nodejs.org): JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com): Fast, unopinionated, minimalist web framework for Node.js.
- [Mongoose](https://mongoosejs.com): An Object Data Modeling (ODM) library for MongoDB and Node.js.

## Getting Started

To get started with the API, follow these steps:

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally or have access to a MongoDB server

### Installation

1. Clone the repository from GitHub:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd Wiki-API
   ```

3. Install the dependencies:

   ```bash
    npm install
    ```
4. Start the server:

   ```bash
    npm start
    ```
The server will start running on `http://localhost:3000`.

## Usage

You can interact with the API using various HTTP methods and endpoints to perform CRUD operations on articles.

- To retrieve all articles, send a GET request to __/articles__.

- To create a new article, send a POST request to __/articles__ with the title and content of the article in the request body.

- To delete all articles, send a DELETE request to __/articles__.

- To retrieve a specific article, send a GET request to __/articles/articleTitle__ where articleTitle is the title of the article you want to retrieve.

- To update a specific article, send a PUT request to __/articles/articleTitle__ where articleTitle is the title of the article you want to update. Include the title and content of the article in the request body.

- To partially update a specific article, send a PATCH request to __/articles/articleTitle__ where articleTitle is the title of the article you want to update. Include the title and content of the article in the request body.

- To delete a specific article, send a DELETE request to __/articles/articleTitle__ where articleTitle is the title of the article you want to delete.

Please note that the API assumes a MongoDB database is running locally on the default port (27017) and that the database is named "wikiDB". You can modify the database connection URL in the __mongoose.connect__ statement in __app.js__ if needed.