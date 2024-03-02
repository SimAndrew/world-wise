## World Wise App

### About:

WorldWise is a travel tracking tool that helps you create a visual record of your adventures. You can add cities to your list and view them on a world map, as well as access information about each city.

To use the application, you need to give permission to the device location. The app uses the Leaflet open-source library to display the map.

The application fetches cities from `data/cities.json`.

---

### Sample task, photo:

- Overview

  ![gif1](https://github.com/SimAndrew/world-wise/assets/44125451/0f991e1b-e887-4424-896f-5d84b7edd4e1)

- Add new visited location and impressions

  ![gif2](https://github.com/SimAndrew/world-wise/assets/44125451/b5a3f945-3fe5-4578-bcd6-dcf4114bf3cd)

- data/cities.json contain list of visited countries

```
{
  "cities": [
    {
      "cityName": "Lisbon",
      "country": "Portugal",
      "emoji": "🇵🇹",
      "date": "2027-10-31T15:59:59.138Z",
      "notes": "My favorite city so far!",
      "position": {
        "lat": 38.727881642324164,
        "lng": -9.140900099907554
      },
      "id": 73930385
    },
  ]
}
```

---

### Technologies, Libraries:

- [React JS](https://react.dev/)
- [Vite JS](https://vitejs.dev/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- CSS Modules - Automatically creating a unique class name
- [reactrouter.com](https://reactrouter.com/) Single-Page App
- React Context API - Allow to share state across the entire app
- [leafletjs.com](https://leafletjs.com/) Leaflet is open-source JavaScript library for mobile-friendly interactive maps.
- [react-leaflet.js.org](https://react-leaflet.js.org/) React components for Leaflet maps
- [react-datepicker](https://github.com/Hacker0x01/react-datepicker)


---

### Run the app:

- Clone a project: `git clone`

```
https://github.com/SimAndrew/world-wise.git
```

- Open project code in your editor.
- Install the dependencies, enter into the terminal:

```
npm install
```

- Run the project, enter into the terminal:

```
npm run dev
```

- To run server `data/cities.json` on `localhost:8000/cities` enter into the terminal:

```
npm run server
```
or
```
npx json-server --watch data/cities.json --port 8000
```
