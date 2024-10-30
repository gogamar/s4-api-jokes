// the joke should look like this:
interface JokeResponse {
  id: string;
  joke: string;
  status: number;
}

async function fetchJoke(): Promise<void> {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });

    // check if the response is of the correct type
    const data: JokeResponse = await response.json();

    const joke = document.getElementById("joke");
    if (joke) {
      joke.innerText = `"${data.joke}"`;
    }
    console.log(data.joke);
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
}

fetchJoke();

const button = document.getElementById("next-joke");
button?.addEventListener("click", fetchJoke);

interface Joke {
  joke: string;
  score: number;
  date: string;
}

const reportJokes: Joke[] = [];

function addJoke(jokeText: string, score: number) {
  const existingJoke = reportJokes.find((item) => item.joke === jokeText);

  if (existingJoke) {
    existingJoke.score = score;
    existingJoke.date = new Date().toISOString();
  } else {
    const newJoke: Joke = {
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
      const jokeText = document.getElementById("joke")?.innerText || "";
      const score = parseInt(button.getAttribute("data-score") || "0", 10);
      addJoke(jokeText, score);
    });
  });
});
