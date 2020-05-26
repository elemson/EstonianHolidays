# ESTONIAN CALENDER

This web app shows a week's calendar.
The calendar displays the date and weekday of each day and the names of all the events that exist for that day. The events are Estonian public holidays and holidays from the Estonian Folk Calendar (Eesti Rahvakalender). Public holidays and folk calendar events are displayed differently.

The calendar must be navigable via buttons.

The calendar's HTML must be rendered is Javascript using React. For storing already requested data on client side Redux is used.

The user interface is display reasonably well on all screen sizes and be well designed.

Please note, that the API returns no more than 30 days of holidays in one call. If a period of more than 30 days is requested, the API will return an error with the reason invalid-dates.

I used the following modules:

- `create-react-app`: https://github.com/facebookincubator/create-react-app
- `axios`: https://www.npmjs.com/package/axios
- `bootstrap`: https://getbootstrap.com/

- `dotenv` : https://www.npmjs.com/package/dotenv
- `moment`: https://momentjs.com/
- `react-redux`: https://react-redux.js.org/introduction/quick-start
- `redux`: https://redux.js.org/
-

This guide will assume you have node and npm (or yarn) installed.

**A few things to keep in mind:**

These commands are equivalent.

```bash
npm install --save MODULE
yarn add MODULE

npm install --global MODULE
yarn add global MODULE

npm ...
yarn ...
```

**Let's get started!**

If you don't have `create-react-app` installed, please do so.

```bash
npm install --global create-react-app
```

Install all dependencies with:

```bash
npm install
```

Create `.env.development` files in the `config` folder

Add your API key
REACT_APP_API_KEY= API_KEY_IS_INSERTED HERE

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
