# Weather App

A React-based weather application that provides a 5-day forecast and detailed weather information for searched cities.

## Features

- Displays 5-day weather forecast and city-specific weather details.
- Search functionality to find weather data for specific cities.
- Organized folder structure for scalability and maintainability.
- Uses React Router v6 for routing and React Context API for state management.
- Follows best practices with ESLint, Prettier, and Git.

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the development server with `npm run dev`.

## Project Structure

├── README.md
├── public
├── src
│ ├── api
│ ├── weather
│ │ ├── action
│ │ ├── constants
│ │ └── hooks
│ └── assets
│ ├── fonts
│ ├── gifs
│ ├── icons
│ └── images
├── context
│ └── WeatherDataContext
├── hooks
├── layouts
│ ├── AppLayout
│ └── components
│ └── Sidebar
├── pages
│ ├── CityDetails
│ └── HomePage
│ └── components
│ ├── Forecast
│ └── TemperatureChart
├── router
├── styles
└── utils
└── package.json

## Technologies Used

- React
- React Router
- OpenWeather API
