import React from "react";


const Servise1 = (props) => {

    return (

        <div className="infoWeath">
            OpenWeatherMap (EN)
            <form id="form1" onSubmit={props.WeatherMethod}>
                <input type="text" className="form-control" name="city" placeholder="Город" />
                <button className="btn btn btn-warning">Выполнить</button>
            </form>
        </div>
    )
}


export default Servise1;