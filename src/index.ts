import { fetchJoke, changeBackground } from "./jokeApi.js";
import { addJoke } from "./jokeScores.js";
import { fetchWeather, displayWeather } from "./weatherApi.js";

document.addEventListener("DOMContentLoaded", async () => {
  fetchJoke();
  const button = document.getElementById("next-joke");
  button?.addEventListener("click", () => {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
      scoreElement.innerText = "Vota l'acudit!";
    }
    changeBackground();
    fetchJoke();
  });

  const voteButtons = document.querySelectorAll(".vote-button");
  voteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const jokeText = document.getElementById("joke")?.innerText || "";
      const score = parseInt(button.getAttribute("data-score") || "0", 10);
      addJoke(jokeText, score);
    });
  });

  // Barcelona coordinates
  const latitude = 41.38701852240342;
  const longitude = 2.170115070045013;
  const weatherData = await fetchWeather(latitude, longitude);
  displayWeather(weatherData);
});
