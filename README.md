This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Decisions

### Responsive Behavior
In order to make the application responsive, I used Bootstrap as it is one of most popular modern CSS framework. Please note that there are other frameworks that can achieve the same goal.

### Data Representation
Based on the JSON response provided by the server and after exploring various data representations, Tabular format best fitted the need. As tables inherently support sorting and filtering. 

Also, tables are very useful when we have large list of users to display as we can easily add pagination.

### User Profile
Since the amount of information for a user us limited, I used a some template and utilized complete the information of the user.

As the current application scope is very limited, I didn't have to rely on any state management library like Redux. 

I believe the UI should be intuitive and easy to use.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
