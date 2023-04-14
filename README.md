# weather_cli
Logs weather data of a specified location using OpenWeather and MapBox.

## Setting Up Local Environment
### Install Dependencies
1. Install [node.js](https://nodejs.org/en)
2. Install [git](http://git-scm.com/download) and clone the weather CLI repository.
  ``` 
  $ git clone https://github.com/eugeneworld/weather_cli.git
  $ cd weather_cli
  $ npm install
  ```
### Generate API Keys
There are two main API's used in weather_cli.
1. Sign up for [MapBox](https://www.mapbox.com/) API.
2. Sign up for [OpenWeather](https://openweathermap.org/) API.

## Usage
To retrieve weather data of a location, use the following command:
  ```
  $ node index.js <location> <option>
  ```
i.e. `$ node index.js bucharest -f`
This command will return weather information for Bucharest, Romania in degrees Fahrenheit.
### Options
There exists two main options which determine unit type of degrees:
  - Fahrenheit (-f or -fahrenheit)
  - Celsius (-c or -celsius)

### Miscellaneous Commands and Options
Use `$ node index.js help` to pull up a help menu.

Additional flags:
  - -clear to clear the console.
  - -noClear to turn off console clear.
  - -d or -debug to log debug information.
  - -v or -version to log current version.
