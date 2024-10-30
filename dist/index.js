"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://icanhazdadjoke.com/", {
                headers: { Accept: "application/json" },
            });
            // check if the response is of the correct type
            const data = yield response.json();
            const joke = document.getElementById("joke");
            if (joke) {
                joke.innerText = `"${data.joke}"`;
            }
            console.log(data.joke);
        }
        catch (error) {
            console.error("Error fetching joke:", error);
        }
    });
}
fetchJoke();
const button = document.getElementById("next-joke");
button === null || button === void 0 ? void 0 : button.addEventListener("click", fetchJoke);
const reportJokes = [];
function addJoke(jokeText, score) {
    const existingJoke = reportJokes.find((item) => item.joke === jokeText);
    if (existingJoke) {
        existingJoke.score = score;
        existingJoke.date = new Date().toISOString();
    }
    else {
        const newJoke = {
            joke: jokeText,
            score: score,
            date: new Date().toISOString(),
        };
        reportJokes.push(newJoke);
    }
    console.log(reportJokes);
}
document.addEventListener("DOMContentLoaded", () => {
    const voteButtons = document.querySelectorAll(".vote-button");
    voteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            var _a;
            const jokeText = ((_a = document.getElementById("joke")) === null || _a === void 0 ? void 0 : _a.innerText) || "";
            const score = parseInt(button.getAttribute("data-score") || "0", 10);
            addJoke(jokeText, score);
        });
    });
});
