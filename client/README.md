# Sound Files Manager (client)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Important Note

To get data from the server, you should also start in another terminal the backend service (requires docker-compose)

```bash
$ cd ../server
$ docker-compose up
```

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


## TODO

* Write tests
* Add table pagination
* Add table filtering
* Add table sorting
* Complete file upload and table refresh functionalities
* Use audio player with waveform support (Ideas: [howler.js](https://github.com/goldfire/howler.js), [waveform-react](https://ruebel.github.io/waveform-react/))