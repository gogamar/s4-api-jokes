interface JokeResponse {
  id: string;
  joke: string;
  status: number;
}

interface ChuckNorrisJokeResponse {
  id: string;
  value: string;
}

function isChuckNorrisJoke(data: any): data is ChuckNorrisJokeResponse {
  return (data as ChuckNorrisJokeResponse).value !== undefined;
}

export async function fetchJoke(): Promise<void> {
  const useChuckNorris = Math.random() < 0.5;

  const url = useChuckNorris ? "https://api.chucknorris.io/jokes/random" : "https://icanhazdadjoke.com/";

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch joke");
    }

    const data = await response.json();

    const jokeText = isChuckNorrisJoke(data) ? data.value : data.joke;

    const jokeElement = document.getElementById("joke");

    if (jokeElement) {
      jokeElement.innerText = `"${jokeText}"`;
    }
    console.log(jokeText);
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
}

let currentBlobIndex = 0;

export function changeBackground(): void {
  const blobBackground = document.getElementById("blob-background");
  const blobClasses = ["blob1", "blob2", "blob3", "blob4"];

  if (blobBackground) {
    blobBackground.classList.remove(blobClasses[currentBlobIndex]);
    currentBlobIndex = (currentBlobIndex + 1) % blobClasses.length;
    blobBackground.classList.add(blobClasses[currentBlobIndex]);
  }
}
