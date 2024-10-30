var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchWeather(latitude, longitude) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching weather data: ${response.statusText}`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error("Error fetching weather data:", error);
            return null;
        }
    });
}
export function displayWeather(data) {
    if (!data)
        return;
    const weatherInfo = `
      <h2>El temps a Barcelona</h2>
      <p>Temperatura: ${data.current_weather.temperature}°C</p>
      <p>Vent: ${data.current_weather.windspeed} m/s</p>
  `;
    const weatherElement = document.getElementById("weather");
    if (weatherElement) {
        weatherElement.innerHTML = weatherInfo;
    }
}
