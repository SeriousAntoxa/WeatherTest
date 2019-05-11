import React from "react";

const Weather = (props) => {
    return (
        <div>
            <p className="error">{props.error}</p>
            {props.city &&
                <div className="infoWeath">
                    <p>Город: {props.city}</p>
                    <p>Температура: {props.temp} °C</p>
                    <p>Влажность: {props.humidity} %</p>
                    <p>Скорость ветра: {props.speed} м/с</p>
                    
                </div>
            }
        </div>
    )
}

export default Weather;