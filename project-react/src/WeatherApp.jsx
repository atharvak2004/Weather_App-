import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function WeatherApp(){

    const[weatherInfo , setweatherInfo] = useState({
        city: "Pune",
        feelsLike: 24.11,
        humidity: 21,
        temp: 25.01,
        tempMax: 25.01,
        tempMin: 25.01,
        weather: "clear sky",
    });

    let updateInfo = (newInfo)=>{
        setweatherInfo(newInfo);
    };

    return (<div className="container">
        <h1>Weather App</h1>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>);

}