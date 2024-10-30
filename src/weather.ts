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

export function displayWeather(data: any) {
  if (!data) return;

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
