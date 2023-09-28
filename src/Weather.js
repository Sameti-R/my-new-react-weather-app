import React from "react";
export default function Weather() {
  return (
    <div>
      <div className="container">
        <div className="mainPage">
          <form className="myForm" id="my-form">
            <input
              type="search"
              className="searchEngine"
              id="search-engine"
              placeholder="Enter a city"
              autofocus="on"
              autocomplete="off"
            />
            <input
              type="submit"
              className="searchButton"
              id="search-button"
              value="Search"
            />
          </form>
          <div className="row text-center">
            <p className="col">
              <span className="city" id="the-city">
                London
              </span>{" "}
              <br />{" "}
              <span className="weather" id="weather-condition">
                mostly cloudy
              </span>
            </p>
            <p className="col">
              {" "}
              <img
                id="weather-icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAjdJREFUeNrtmsGtgzAMhjtCRmAERsgIHYFjjx2BERiBEToCI+TaG2+DbJBnKj8pD1Eaiv8AwpX+C1Ap/hzHjpNLCOFyZl0UgAJQAApAASgABaAAFIACODEA9C/83AypIrUkRwpv5Pib4dsCNp5cAMgIS3rMGPxJw3/t4QDQoEtSt8LwsTpJEFAAAONjNUM4HSIEOO7vJC8Mwa2FkHURZBDSM2KAWu4CwPP5LEgtyZMCy/OzIgKBgGA2BUAGliPDxxreldFM2EU4JAOgwRtSPeHdmj0/Z3z8fcEQasTCiATgEgxMURvNAkR2sOIA2MtBSH60KNbC4dAhAHhBACFDdrBiADj2A0DI7PA4AgB0dihWAaBBXUk92Hhkdqi+BsDGh8ySzg7tGgD9BgC88FrgvgKQIeY/ZgepxXB3m6EFm6bm7ADqQwDggSLUHQVA2KG6P50JQJ+a96UBuC08OwqRerOWGPftkUa7Oc/GrTBKo5b0mEivwzOLAlABjb8v6EY1CXVGgwCAampUqZ5NNP5fuS1aB6w87Zn1PG+XpStOKw3AIro5IONfM0e8EhRsZFxz7EYRACRmgQc0YPMAENrAdJk6UBgAKwojz/W/yQUgXgilARguS5dUd2Yir+foPzSQ7TAfifdLOjZvzhSzQID0A3gmuJTDzIQzRXg4IC9IvFsY68jzWxr/qgvQV2TsRJ1gwMXOIuW+JNWhjtx2DWCDE6fvAOhNUQWgABSAAlAACkABKAAFoABOp1+6Bd0LJ+BorgAAAABJRU5ErkJggg=="
                alt="weather condition"
              />{" "}
              <span className="temperature">
                <span className="degree" id="celcius">
                  12
                </span>
                <a href="#" className="symbol active" id="metric-temp">
                  ℃
                </a>{" "}
                <span className="degree">|</span>{" "}
                <span className="degree" id="fahrenheit">
                  {" "}
                </span>
                <a href="#" className="symbol" id="imperial-temp">
                  ℉
                </a>{" "}
              </span>
            </p>
            <p className="col">
              <br />{" "}
              <span className="details">
                <span>
                  <span className="text"> Humidty:</span>{" "}
                  <span id="humidity"> 26</span>%
                </span>{" "}
                <br />
                <span>
                  <span className="text"> Wind:</span>{" "}
                  <span id="wind"> 10 </span>
                  <span id="wind-unit">km</span>{" "}
                </span>
              </span>
            </p>
          </div>

          <div className="fiveDays" id="forecast"></div>
          <div className="dayTime">
            <span className="text"> Last updated:</span>
            <span className="day" id="the-day">
              Saturday
            </span>
            ,{" "}
            <span className="time">
              <span id="hour">22</span>:<span id="minute">45</span>{" "}
            </span>
          </div>
        </div>
        <span className="source">
          {" "}
          <span className="footage">Coded by: </span>
          <span className="name"> Rezvan Sameti, </span>
          <span className="footage">Open Sourced on: </span>
          <a
            className="myLink"
            href="https://github.com/Sameti-R/my-new-react-weather-app"
          >
            GitHub
          </a>
          <span className="footage">, Hosted on:</span>
          <a
            className="myLink"
            href="https://https://exquisite-sunburst-9df367.netlify.app//"
          >
            Netlify
          </a>
        </span>
      </div>
      <script src="index.js"></script>
    </div>
  );
}
