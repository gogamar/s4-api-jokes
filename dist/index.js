var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchJoke, changeBackground } from "./jokeApi.js";
import { addJoke } from "./jokeScores.js";
import { fetchWeather, displayWeather } from "./weatherApi.js";
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    fetchJoke();
    const button = document.getElementById("next-joke");
    button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
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
            var _a;
            const jokeText = ((_a = document.getElementById("joke")) === null || _a === void 0 ? void 0 : _a.innerText) || "";
            const score = parseInt(button.getAttribute("data-score") || "0", 10);
            addJoke(jokeText, score);
        });
    });
    // Barcelona coordinates
    const latitude = 41.38701852240342;
    const longitude = 2.170115070045013;
    const weatherData = yield fetchWeather(latitude, longitude);
    displayWeather(weatherData);
}));
