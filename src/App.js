import React from 'react';
import './App.css';
import Info from "./Components/Info";
import Weather from './Components/Weather';
import Servise1 from './Components/Servise1';
import Servise2 from './Components/Servise2';

const API_KEY1 = "f1ddfa583287f2bbec33f2c5761eec8a";
const API_KEY2 = "56f0549c822349cab776d68706414059";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    humidity: undefined,
    speed: undefined,
    error: undefined,
    isOpenForm1: false,
    isOpenForm2: false
  }

  gettingWeather2 = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
      const api_url = await
        fetch(`https://api.weatherbit.io/v2.0/current?key=${API_KEY2}&city=${city}&lang=ru&units=M`);
      const data = await api_url.json();
      console.log(data);

      var spd = data.data[0].wind_spd;
      var spd_n = spd.toFixed(1);

      this.setState({
        temp: data.data[0].temp,
        city: data.data[0].city_name,
        humidity: data.data[0].rh,
        speed: spd_n,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        humidity: undefined,
        speed: undefined,
        error: "Вы не ввели название города!"
      })
    }
  }

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
      const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY1}`);
      const data = await api_url.json();
      console.log(data);

      var temp_C = Math.floor(data.main.temp - 273.15);

      this.setState({
        temp: temp_C,
        city: data.name,
        humidity: data.main.humidity,
        speed: data.wind.speed,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        humidity: undefined,
        speed: undefined,
        error: "Вы не ввели название города!"
      })
    }
  }

  render() {
    const showForm1 = this.state.isOpenForm1 &&
      <Servise1 WeatherMethod={this.gettingWeather} />

    const showForm2 = this.state.isOpenForm2 &&
      <Servise2 WeatherMethod2={this.gettingWeather2} />

    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>

              <div className="col-sm-7 form">
                <div className="infoWeath">
                  Выберите сервис:
                  <button className="btns btn-secondary" onClick={this.handleClick1}>
                  OpenWeatherMap</button>
                  <button className="btns btn-secondary" onClick={this.handleClick2}>
                  Weatherbit
                  </button>
                </div>

                {showForm1}
                {showForm2}
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  humidity={this.state.humidity}
                  speed={this.state.speed}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleClick1 = () => {
    this.setState({
      isOpenForm1: true,
      isOpenForm2: false
    });
  }
  handleClick2 = () => {
    this.setState({
      isOpenForm1: false,
      isOpenForm2: true
    });
  }
}

export default App;
