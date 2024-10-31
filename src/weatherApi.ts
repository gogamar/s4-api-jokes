export async function fetchWeather(latitude: number, longitude: number) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}

function getWeatherDescription(weatherCode: number): string {
  // Determine the weather condition based on the weather code
  if (weatherCode === 0) {
    return "sunny";
  } else if (weatherCode >= 1 && weatherCode <= 3) {
    return "cloudy";
  } else if (
    (weatherCode >= 51 && weatherCode <= 67) || // Drizzle and rain
    (weatherCode >= 80 && weatherCode <= 82) // Rain showers
  ) {
    return "rain";
  } else if (weatherCode >= 71 && weatherCode <= 86) {
    return "snow";
  } else if (weatherCode >= 95 && weatherCode <= 99) {
    return "thunder";
  } else {
    return "Unknown Weather Condition";
  }
}

export function displayWeather(data: any) {
  if (!data) return;

  const weatherDescription = getWeatherDescription(data.current_weather.weathercode);

  const weatherInfo = `
    <div class="weather-container">
        <img src="../images/${weatherDescription}.png" alt="Weather Icon" class="weather-icon" />
        <span class="temperature">${data.current_weather.temperature}°C</span>
    </div>
  `;

  const weatherElement = document.getElementById("weather");
  if (weatherElement) {
    weatherElement.innerHTML = weatherInfo;
  }
}
