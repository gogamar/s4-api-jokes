const reportJokes = [];
export function addJoke(jokeText, score) {
    const existingJoke = reportJokes.find((item) => item.joke === jokeText);
    const scoreElement = document.getElementById("score");
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
    if (scoreElement) {
        if (score === 1) {
            scoreElement.innerText = `Oh, no! Aquest acudit no t'ha fet gràcia!`;
        }
        else if (score === 2) {
            scoreElement.innerText = `Aquest acudit no està malament!`;
        }
        else if (score === 3) {
            scoreElement.innerText = `Aquest acudit t'ha fet riure!`;
        }
    }
    console.log(reportJokes);
}
