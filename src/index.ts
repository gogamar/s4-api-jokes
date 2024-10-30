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
