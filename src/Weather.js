import React from "react";
import axios from "axios";
export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}C`
    );
  }
  let apiKey = "264d058cf40518d3759e3102bcc572cf";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let unit = "metric";
  let apiUrl = `${apiEndpoint}${props.city}&units=${unit}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <h2>Hello from Weather</h2>
    </div>
  );
}
