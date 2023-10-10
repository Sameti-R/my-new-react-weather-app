import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
export default function Weather() {
  let [list, setList] = useState(
    <div>
      <div className="row text-center">
        <p className="col">
          <span className="city">London</span> <br />{" "}
          <span className="weather">mostly cloudy</span>
        </p>
        <p className="col">
          {" "}
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAjdJREFUeNrtmsGtgzAMhjtCRmAERsgIHYFjjx2BERiBEToCI+TaG2+DbJBnKj8pD1Eaiv8AwpX+C1Ap/hzHjpNLCOFyZl0UgAJQAApAASgABaAAFIACODEA9C/83AypIrUkRwpv5Pib4dsCNp5cAMgIS3rMGPxJw3/t4QDQoEtSt8LwsTpJEFAAAONjNUM4HSIEOO7vJC8Mwa2FkHURZBDSM2KAWu4CwPP5LEgtyZMCy/OzIgKBgGA2BUAGliPDxxreldFM2EU4JAOgwRtSPeHdmj0/Z3z8fcEQasTCiATgEgxMURvNAkR2sOIA2MtBSH60KNbC4dAhAHhBACFDdrBiADj2A0DI7PA4AgB0dihWAaBBXUk92Hhkdqi+BsDGh8ySzg7tGgD9BgC88FrgvgKQIeY/ZgepxXB3m6EFm6bm7ADqQwDggSLUHQVA2KG6P50JQJ+a96UBuC08OwqRerOWGPftkUa7Oc/GrTBKo5b0mEivwzOLAlABjb8v6EY1CXVGgwCAampUqZ5NNP5fuS1aB6w87Zn1PG+XpStOKw3AIro5IONfM0e8EhRsZFxz7EYRACRmgQc0YPMAENrAdJk6UBgAKwojz/W/yQUgXgilARguS5dUd2Yir+foPzSQ7TAfifdLOjZvzhSzQID0A3gmuJTDzIQzRXg4IC9IvFsY68jzWxr/qgvQV2TsRJ1gwMXOIuW+JNWhjtx2DWCDE6fvAOhNUQWgABSAAlAACkABKAAFoABOp1+6Bd0LJ+BorgAAAABJRU5ErkJggg=="
            alt="weather condition"
          />{" "}
          <span className="temperature">
            <span className="degree">12</span>
            <span className="symbol active">°</span>
          </span>
        </p>
        <p className="col">
          <br />{" "}
          <span className="details">
            <span>
              <span className="text"> Humidty:</span> <span> 26</span>%
            </span>{" "}
            <br />
            <span>
              <span className="text"> Wind:</span> <span> 10 </span>
              <span>km/h</span>{" "}
            </span>
          </span>
        </p>
      </div>

      <div className="fiveDays" id="forecast"></div>
      <div className="dayTime">
        <span className="text"> Last updated:</span>
        <span className="day">Saturday</span>,{" "}
        <span className="time">
          <span>22</span>:<span>45</span>{" "}
        </span>
      </div>
    </div>
  );
  let [city, setCity] = useState("");
  let [metric, setMetric] = useState(
    <a href="#" className="symbol active">
      ℃
    </a>
  );
  let [imperial, setImperial] = useState(
    <a href="#" className="symbol">
      ℉
    </a>
  );
  function ShowWeather(response) {
    setMetric(
      <a href="#" className="symbol active ">
        ℃
      </a>
    );
    setImperial(
      <a href="#" className="symbol ">
        ℉
      </a>
    );
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = new Date(response.data.dt * 1000);
    let day = days[date.getDay()];
    let hour = date.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minute = date.getMinutes();
    if (minute < 10) {
      minute = `0${minute}`;
    }

    setList(
      <div>
        <div className="row text-center">
          <p className="col">
            <span className="city">{response.data.name}</span> <br />{" "}
            <span className="weather">
              {response.data.weather[0].description}
            </span>
          </p>
          <p className="col">
            {" "}
            <img src={icon} alt="weather condition" />{" "}
            <span className="temperature">
              <span className="degree">
                {Math.round(response.data.main.temp)}{" "}
              </span>
              <span className="symbol active">°</span>
            </span>
          </p>
          <p className="col">
            <br />{" "}
            <span className="details">
              <span>
                <span className="text"> Humidty:</span>{" "}
                <span> {response.data.main.humidity}</span>%
              </span>{" "}
              <br />
              <span>
                <span className="text"> Wind:</span>{" "}
                <span> {Math.round(response.data.wind.speed)} </span>
                <span>km/h</span>{" "}
              </span>
            </span>
          </p>
        </div>

        <div className="fiveDays" id="forecast"></div>
        <div className="dayTime">
          <span className="text"> Last updated: </span>
          <span className="day"> {day} </span>,{" "}
          <span className="time">
            <span> {hour}</span>:<span>{minute} </span>{" "}
          </span>
        </div>
        <div></div>
      </div>
    );
  }
  function ShowWeatherTwo(response) {
    setMetric(
      <a href="#" className="symbol ">
        ℃
      </a>
    );
    setImperial(
      <a href="#" className="symbol active">
        ℉
      </a>
    );
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = new Date(response.data.dt * 1000);
    let day = days[date.getDay()];
    let hour = date.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minute = date.getMinutes();
    if (minute < 10) {
      minute = `0${minute}`;
    }

    setList(
      <div>
        <div className="row text-center">
          <p className="col">
            <span className="city">{response.data.name}</span> <br />{" "}
            <span className="weather">
              {response.data.weather[0].description}
            </span>
          </p>
          <p className="col">
            {" "}
            <img src={icon} alt="weather condition" />{" "}
            <span className="temperature">
              <span className="degree">
                {Math.round(response.data.main.temp)}{" "}
              </span>
              <span className="symbol active">°</span>
            </span>
          </p>
          <p className="col">
            <br />{" "}
            <span className="details">
              <span>
                <span className="text"> Humidty:</span>{" "}
                <span> {response.data.main.humidity}</span>%
              </span>{" "}
              <br />
              <span>
                <span className="text"> Wind:</span>{" "}
                <span> {Math.round(response.data.wind.speed)} </span>
                <span>mph</span>{" "}
              </span>
            </span>
          </p>
        </div>

        <div className="fiveDays" id="forecast"></div>
        <div className="dayTime">
          <span className="text"> Last updated: </span>
          <span className="day"> {day} </span>,{" "}
          <span className="time">
            <span> {hour}</span>:<span>{minute} </span>{" "}
          </span>
        </div>
        <div></div>
      </div>
    );
  }
  function currentWeather(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(ShowWeather);
  }
  function UpdateCity(event) {
    setCity(event.target.value);
  }
  function ChangeUnitImperial(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=imperial`;
    axios.get(url).then(ShowWeatherTwo);
  }
  return (
    <div>
      {" "}
      <div>
        <div className="container">
          <div className="mainPage">
            <form className="myForm" onSubmit={currentWeather}>
              <input
                type="search"
                className="searchEngine"
                placeholder="Enter a city"
                autoFocus="on"
                autoComplete="off"
                onChange={UpdateCity}
              />
              <input type="submit" className="searchButton" value="Search" />
            </form>
            <span>
              <a href="#" className="symbol  active" onClick={currentWeather}>
                {metric}
              </a>{" "}
              <span className="degree">|</span>{" "}
              <span className="degree"> </span>
              <a href="#" className="symbol " onClick={ChangeUnitImperial}>
                {imperial}
              </a>{" "}
            </span>
            <div>{list}</div>
          </div>
          <div>
            <span className="source">
              {" "}
              <span className="footage">Coded by: </span>
              <span className="name"> Rezvan Sameti, </span>
              <span className="footage">Open Sourced on: </span>
              <a
                className="myLink"
                href="https://github.com/Sameti-R/WeatherApp-FinalProject"
              >
                GitHub
              </a>
              <span className="footage">, Hosted on:</span>
              <a
                className="myLink"
                href="https://darling-pony-e2bc6a.netlify.app/"
              >
                Netlify
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
