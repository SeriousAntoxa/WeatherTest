import React from "react";


const Servise2 = (props) => {

    return (

        <div className="infoWeath">
            Weatherbit (RU)
            <form id="form2" onSubmit={props.WeatherMethod2}>
                <input type="text" className="form-control" name="city" placeholder="Город" />
                <button className="btn btn btn-warning">Выполнить</button>
            </form>
        </div>
    )
}


export default Servise2;