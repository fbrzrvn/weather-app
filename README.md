<h1 align="center">Weather App</h1>

<p align="center">
  <a href="#about">About</a> &#xa0; | &#xa0;
  <a href="#built-with">Built with</a> &#xa0; | &#xa0;
  <a href="#getting-started">Getting Started</a> &#xa0; | &#xa0;
  <a href="#author">Author</a>
</p>

<br>

## About

In this project I have to develop an UI that shows the weather of different
cities and allows filter/edit and save some information. The solution must be
developed using the frontend framework you want (Vue.js, React, Angular...etc)
and any other library that the candidate considers useful.

_Functional requirements:_

1. Use OpenWeatherMap API to obtain weather information
2. Show a list of at least ten cities' weathers in the main app page
3. Search input with autocomplete cities to filter the previous list

_Evaluation points:_

1. Clean code
2. Easy to use
3. UI/Layout design
4. Tests
5. Components design

<br>

## Built with

- React with Typescript
- React Query for data fetching
- Styled components for styling
- Eslint & Prettier for linting
- Jest, React Testing Library and Cypress for testing

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
how to deploy the project on a live system.

**To intalling and use this project you will need:**

1. Clone the repo
   ```sh
   git clone https://github.com/fab-rvn/weather-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file with your api key
   ```
   REACT_APP_API_KEY='YOUR_KEY'
   ```
4. Start the project in your localhost
   ```sh
   npm run start
   ```
5. test
   ```sh
    npm run test
   ```
6. e2e
   ```sh
    npm run cy:open
   ```

<br>

## Author

<table>
  <tr>
    <td align="center">
      <a href="https://faberdev.netlify.app/">
        <img src="https://avatars.githubusercontent.com/u/66378887?v=4?s=100" width="100px;" alt=""/><br />
        <sub><b>Fabrizio Ervini</b></sub>
      </a>
    </td>
  </tr>
</table>
