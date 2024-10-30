# API Jokes Project

This TypeScript project displays jokes to users, with additional functionality for rating and tracking each joke displayed. Built with HTML, CSS, and TypeScript, this project connects to joke APIs and includes interactive elements to engage users. In later stages, the app also displays local weather information.

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/gogamar/s4-api-jokes.git
cd s4-api-jokes
```

### 2. Install Dependencies

After cloning the repository, navigate to the project directory and install the required packages:

```bash
npm install
```

### 3. Compile TypeScript

Compile the TypeScript code to JavaScript:

```bash
npx tsc
```

### 4. Run the Project

Open `index.html` in your browser to view the app.

---

## Exercises

### Exercise 1

**Goal**: Create a main screen to display jokes to the user.

- **Instructions**: On startup, display the first joke on screen with a “Next Joke” button.
- **Next Joke Button**: Fetches a new joke from the API and displays it on the page and in the console.

**Tips**:

- Use promises or `async/await` to handle the API response.
- Test the API first in Postman to understand its response structure.

### Exercise 2

**Goal**: Style the application layout.

- **Instructions**: Create a basic layout for the joke display. Placement doesn’t need to be precise yet.
- Suggested Layout: Display the joke and the button in their intended locations.

### Exercise 3

**Goal**: Track joke ratings.

- **Instructions**: The project will store each joke and its rating in an array called `reportAcudits`. Each entry in the array should contain:

  ```typescript
  {
    joke: "...",
    score: 1,  // Range of 1 to 3
    date: "..." // ISO format
  }
  ```

- **Implementation Details**:
  - Display three rating buttons (1, 2, or 3).
  - Allow users to rate each joke (optional).
  - Store the joke, rating, and date in `reportAcudits` and log the updated array to the console.
  - Users can change the rating before moving to the next joke.

### Exercise 4

**Goal**: Display weather information.

- **Instructions**: Fetch weather information using a weather API and display it when the app loads. This information appears at the start of the application to help users prepare for the day.

### Exercise 5

**Goal**: Diversify joke sources.

- **Instructions**: To keep users engaged, add another joke API and alternate joke sources. Alternate APIs for each joke or select randomly.

**Tip**: Chuck Norris jokes are often popular and could be a good second source!

### Exercise 6

**Goal**: Final styling and responsive layout.

- **Instructions**: Style the app according to provided designs or your own layout preferences, making it fully responsive.

**Additional Styling Tips**:

- Use an SVG shape for the joke container for added design appeal.
- Optional: Preload multiple SVG shapes to randomly display different containers for each joke, enhancing the user experience.

---

## Project Structure

```plaintext
s4-api-jokes/
│
├── src/                    # Source files
│   ├── index.ts            # Main TypeScript file
│   └── ...
├── dist/                   # Compiled JavaScript
├── index.html              # Main HTML file
├── styles.css              # Optional styling file
├── .gitignore              # Git ignore file
└── README.md               # Project documentation
```

---

## API Documentation

- **Jokes API**: [icanhazdadjoke](https://icanhazdadjoke.com/api)
- **Weather API**: Find a suitable free weather API, such as [OpenWeather](https://openweathermap.org/api).

---

## Tips for Development

1. **Postman**: Test APIs in Postman first to understand the response format.
2. **TypeScript**: Use `async/await` for cleaner async code and add types to API responses for safer data handling.
3. **Array Storage**: Use an array to track joke data and periodically log it to the console for debugging.
4. **Responsive Design**: Use media queries and flexible layouts to ensure the app looks great on any device.

---

## License

This project is licensed under the MIT License.
