var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function isChuckNorrisJoke(data) {
    return data.value !== undefined;
}
export function fetchJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const useChuckNorris = Math.random() < 0.5;
        const url = useChuckNorris ? "https://api.chucknorris.io/jokes/random" : "https://icanhazdadjoke.com/";
        try {
            const response = yield fetch(url, {
                headers: { Accept: "application/json" },
            });
            if (!response.ok) {
                throw new Error("Failed to fetch joke");
            }
            const data = yield response.json();
            const jokeText = isChuckNorrisJoke(data) ? data.value : data.joke;
            const jokeElement = document.getElementById("joke");
            if (jokeElement) {
                jokeElement.innerText = `"${jokeText}"`;
            }
            console.log(jokeText);
        }
        catch (error) {
            console.error("Error fetching joke:", error);
        }
    });
}
let currentBlobIndex = 0;
export function changeBackground() {
    const blobBackground = document.getElementById("blob-background");
    const blobClasses = ["blob1", "blob2", "blob3", "blob4"];
    if (blobBackground) {
        blobBackground.classList.remove(blobClasses[currentBlobIndex]);
        currentBlobIndex = (currentBlobIndex + 1) % blobClasses.length;
        blobBackground.classList.add(blobClasses[currentBlobIndex]);
    }
}
