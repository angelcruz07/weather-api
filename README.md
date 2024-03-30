<div align='center'>
    <h1>Weather API</h1>
</div>

## Description

This API provides data on the weather in various cities, offering detailed information about weather conditions and specific cities.

- Provides comprehensive information about the weather in a city, with all available parameters.
- Allows retrieving information about the weather in a city showing a single parameter.
- Offers information about the weather in a city using a temporal parameter, showing data up to 4 or 16 days in the future.

The API returns a dataset with a number of cities stored in a database, and it also provides CRUD functionalities through the following endpoints:

## Functionalities

- **POST**: Add a city with corresponding data.
- **GET**: Retrieve data of cities stored in the database.
- **PUT**: Update cities stored in the database.
- **DELETE**: Delete a record of a city in the database.

## Endpoints

(To be completed)

## Getting Started

1. Fork this repository.

2. Clone the project.

```bash
git clone https://github.com/angelcruz07/weather-api
```

3. Install dependencies.

```bash
cd Api

npm install
```

4. Start the server or run tests.

```bash
node App.js

npm run test
```

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**

## Testing Technologies

- **Chai**
- **Mocha**
