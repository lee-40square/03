# Run

```
docker-compose up
```

App should be available at http://localhost:3000

# Run with build

This is required if new package is added to node_modules

```
docker-compose up --build
```

# Connect to mongo using Compass

Download (MongoDb Compass)[https://www.mongodb.com/try/download/compass] and use below connection string:

```
mongodb://root:password@localhost:27017/
```
