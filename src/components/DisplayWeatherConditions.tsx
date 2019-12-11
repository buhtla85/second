import * as React from "react";

interface IConditionsProps {
    cityName: string,
    countryName: string,
    errMessage: string,
    temperature: number,
    description: string,
    icon: string,
    pressure: number,
    humidity: number
}

export const DisplayWeather = (props: IConditionsProps) => {
    return (
        <section className="d-block text-center pt-3">
            {props.cityName && props.countryName && <h1 className="text-white font-weight-light pb-1">Location: {props.cityName}, {props.countryName}</h1>}
            {props.temperature && <h3 className="text-white font-weight-light pb-1">Temperature: {props.temperature}</h3>}
            {props.icon && <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather image"/>}
            {props.description && <h3 className="text-white font-weight-light pb-1">Conditions: {props.description}</h3>}
            {props.humidity && <h3 className="text-white font-weight-light pb-1">Humidity: {props.humidity} %</h3>}
            {props.pressure && <h3 className="text-white font-weight-light pb-1">Pressure: {props.pressure} mb</h3>}
            {props.errMessage && <h3 className="text-white font-weight-light pb-1">{props.errMessage}</h3>}
        </section>
    )
}

