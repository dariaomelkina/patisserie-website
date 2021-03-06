# Patisserie Website
Project for the React course at UCU: a little website for an imaginary patisserie.

This project was created with [Create React App](https://github.com/facebook/create-react-app).

Html and css were created with the help of https://grapesjs.com.

## Description:
A little website for an imaginary patisserie.
Contains such pages:
* home (just the main page)
* menu
* vacancies
* shopping cart
* contacts

## Prerequisites:
```
npm i -g json-server
npm install redux-thunk
npm install --save redux
```

## Usage:
In the project directory, you can run:
```bash
json-server src/api/data.js --port 3004
npm start
```

If You want to use another port for json-server, do not forget to 
specify it at the file [src/api/api.js](src/api/api.js).

(project will run at http://localhost:3000, if not specified otherwise)

## Testing:
In the project directory, you can run:
```bash
npm test
```

## Building:
In the project directory, you can run:
```bash
npm run build
```

(builds the app for production to the `build` folder.)

## Credits:
* [Natalie Romanyshyn](https://github.com/romanyshyn-natalia)
* [Zoryana-Yustuna Herman](https://github.com/zoriankaH)
* [Daria Omelkina](https://github.com/dariaomelkina)
