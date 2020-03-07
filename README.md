# MonogScraper

### Overview

Mongoscraper scrapes reddit for articles to condense information into a single place.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. They will also give an overview of some of the app's functionality. 

### Prerequisites

You will need MongoDB installed if you want to run this application locally. For help installing MongoDB, visit
````
https://docs.mongodb.com/manual/installation/
````

Once installed, make sure the MongoDB daemon is running with the following command line command:
````
$ mongod
````

### Installing

Git clone the repository to your local machine:

HTTPS: 
```
$ git clone https://github.com/TheResinger/mongoScraper.git
```

SSH:
```
$ git clone git@github.com:TheResinger/mongoScraper.git
```

To connect to your local Mongo database, you will need to add an .env file in the root of your cloned repository containing the following code:
````
MONGO_DB="mongodb://localhost/<you decide the name here>"
````

Next, cd into the repository and run the command
```
npm install
```

### Built With

* [Node.js](https://nodejs.org/en) - JavaScript Runtime
* [MongoDB](https://mongodb.com) - NoSQL Database
* [Mongoose](https://mongoosejs.com/docs/) - ODM Library for MongoDB for Node.js Applications
* [Heroku](https://www.heroku.com/) - Web Application Hosting
* [BootStrap](https://getbootstrap.com/) - CSS Template

### Heroku Deployment

[Here is the link for the heroku deployment of this app.](https://bmmongoscraper.herokuapp.com)

### Future Development


### Authors

Benjamin Morrow

