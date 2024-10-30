const reportJokes = [];
export function addJoke(jokeText, score) {
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
