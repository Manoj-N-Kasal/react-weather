import React, { useState } from "react";
import './weatherApp.css';
import search_icon from "../asset/search.png";
import clear_icon from "../asset/clear.png";
import humidity_icon from "../asset/humidity.png";
import cloud_icon from "../asset/cloud.png";
import rain_icon from "../asset/rain.png";
import wind_icon from "../asset/wind.png";
import drizzle_icon from "../asset/drizzle.png";
import snow_icon from "../asset/snow.png";
import pressure_icon from "../asset/pressure.png";
import visibility_icon from "../asset/visibility.png";
const WeatherApp = () => {
    
    const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';
    const [wicon,setwicon] = useState(cloud_icon);
    const search = async ()=>{
const element = document.getElementsByClassName("cityinput");

if(element[0].value === ""){
    return 0;
}
let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_KEY}`;

let response = await fetch(url);
let data =  await response.json();
const humidity = document.getElementsByClassName("humidityy");

const wind = document.getElementsByClassName("wind");

const temperature = document.getElementsByClassName("weather_temp");

const visibility = document.getElementsByClassName("visibility");

const pressure = document.getElementsByClassName("pressure");

const location = document.getElementsByClassName("weather_location");

try {
humidity[0].innerHTML=data.main.humidity +" % ";
wind[0].innerHTML=Math.floor(data.wind.speed) +" Km/h ";
temperature[0].innerHTML=data.main.temp +" ℃";
location[0].innerHTML=data.name;
pressure[0].innerHTML=data.main.pressure + " hPa";
visibility[0].innerHTML=(data.visibility)/1000 +" Km";
    
} catch (error) {
    alert("Please enter a valid city name ");
    return 0;
}


if(data.weather[0].icon==="01d" ||data.weather[0].icon ==="01n"){
    setwicon(clear_icon);
}
else if(data.weather[0].icon==="02d" ||data.weather[0].icon ==="02n"){
    setwicon(cloud_icon);
}
else if(data.weather[0].icon==="03d" ||data.weather[0].icon ==="03n"){
    setwicon(drizzle_icon);
}
else if(data.weather[0].icon==="04d" ||data.weather[0].icon ==="04n"){
    setwicon(drizzle_icon);
}

else if(data.weather[0].icon==="09d" ||data.weather[0].icon ==="09n"){
    setwicon(rain_icon);
}
else if(data.weather[0].icon==="10d" ||data.weather[0].icon ==="10n"){
    setwicon(rain_icon);
}
else if(data.weather[0].icon==="13d" ||data.weather[0].icon ==="13n"){
    setwicon(snow_icon);
}

else{
    setwicon(clear_icon);
}
    }
    return (
        <div className="container">
            <div className="topbar">
                <input type="text" className="cityinput" placeholder="Search" />
                <div className="search_icon" onClick={()=>{search()}}>
                <img src={search_icon} alt='search' />
                </div>
            </div>
            <div className="weatherimage">
                <img src={wicon} alt="" />
            </div>
            <div className="weather_temp">24C</div>
            <div className="weather_location">Ranebennur</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" />
                    <div className="data">
                        <div className="humidityy">
                           55% 
                        </div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" />
                    <div className="data">
                        <div className="wind">
                           18 Km/hr 
                        </div>
                        <div className="text"> Wind Speed</div>
                    </div>
                </div>
                <div className="element">
                    <img src={visibility_icon} alt="" />
                    <div className="data">
                        <div className="visibility">
                           1000 
                        </div>
                        <div className="text"> Visibility </div>
                    </div>
                </div>
                <div className="element">
                    <img src={pressure_icon} alt="" />
                    <div className="data">
                        <div className="pressure">
                           1000
                        </div>
                        <div className="text">Pressure</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default WeatherApp;