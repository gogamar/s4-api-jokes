interface Joke {
  joke: string;
  score: number;
  date: string;
}

const reportJokes: Joke[] = [];

export function addJoke(jokeText: string, score: number) {
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
