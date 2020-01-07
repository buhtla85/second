import * as React from "react";

interface IConditionsProps {
    cityName: string,
    errMessage: string,
    temperature: number,
    description: string,
    icon: string,
    pressure: number,
    humidity: number,
    showButton: boolean,
    handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const DisplayWeather = (props: IConditionsProps) => {
    return (
        <section className="d-block text-center pt-3">
            {props.cityName && <h1 className="text-white font-weight-light pb-1">Location: {props.cityName}</h1>}
            {props.temperature && <h3 className="text-white font-weight-light pb-1">Temperature: {props.temperature} &#8451;</h3>}
            {props.icon && <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather image"/>}
            {props.description && <h3 className="text-white font-weight-light pb-1">Conditions: {props.description}</h3>}
            {props.humidity && <h3 className="text-white font-weight-light pb-1">Humidity: {props.humidity} %</h3>}
            {props.pressure && <h3 className="text-white font-weight-light pb-1">Pressure: {props.pressure} mb</h3>}
            {props.errMessage && <h3 className="text-white font-weight-light pb-1">{props.errMessage}</h3>}
            {props.showButton && <button type="button" className="btn btn-warning mt-3" onClick={props.handleButtonClick}>Reset</button>}
        </section>
    )
}

