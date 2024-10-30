import { fetchJoke } from "./jokes.js";
import { addJoke } from "./jokeScores.js";
import { fetchWeather, displayWeather } from "./weather.js";

document.addEventListener("DOMContentLoaded", async () => {
  fetchJoke();
  const button = document.getElementById("next-joke");
  button?.addEventListener("click", fetchJoke);

  const voteButtons = document.querySelectorAll(".vote-button");
  voteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const jokeText = document.getElementById("joke")?.innerText || "";
      const score = parseInt(button.getAttribute("data-score") || "0", 10);
      addJoke(jokeText, score);
    });
  });

  const latitude = 41.38701852240342;
  const longitude = 2.170115070045013;
  const weatherData = await fetchWeather(latitude, longitude);
  displayWeather(weatherData);
});
