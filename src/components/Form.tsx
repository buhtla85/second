import * as React from "react";
import { myKey } from "../sensitive";
import { DisplayWeather } from "./DisplayWeatherConditions";
 
interface IStateForm {
    cityName: string,
    countryName: string,
    errMessage: string,
    temperature: number | null,
    description: string,
    icon: string,
    pressure: number | null,
    humidity: number | null,
    isButtonVisible: boolean
}

function weatherObject() {
    return {cityName: "", countryName: "", errMessage: "", temperature: null, description: "", icon: "", pressure: null, humidity: null, isButtonVisible: false}
}

export class Form extends React.Component<{}, IStateForm> {
    constructor(props:any) {
        super(props);
        this.state = weatherObject();     
    }

    handleCityInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        //this.setState({[event.target.name]: event.target.value} as { [K in keyof IStateForm]: IStateForm[K] });
        this.setState({cityName: event.target.value})
    }

    handleCountryInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({countryName: event.target.value});
    }

    fetchWeatherConditions = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {cityName, countryName} = this.state;
        const hitApi = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&APPID=${myKey}`);
        const response = await hitApi.json();

        if(cityName && countryName) {
            this.setState({
                cityName: response.name,
                countryName: response.sys.country,
                errMessage: "",
                temperature: Math.round(response.main.temp - 273.15),
                humidity: response.main.humidity,
                pressure: response.main.pressure,
                description: response.weather[0].description,
                icon: response.weather[0].icon,
                isButtonVisible: true
            });
        } else {
            this.setState({errMessage: "Please be sure to enter valid values to both fields."});
            setTimeout(() => {
                this.setState({errMessage: ""});
            }, 5000)
        } 
    }

    handleReset = () => {
        this.setState(weatherObject());
    }

    render () {
        return (
            <section id="main" className="pt-5">
                <form action="" className="form-inline d-flex justify-content-center" onSubmit={this.fetchWeatherConditions}>
                    <label htmlFor="inlineFormInputCity2" className="sr-only">City</label>
                    <input type="text" value={this.state.cityName} name="cityName" onChange={this.handleCityInput} className="form-control mb-2 mr-sm-2" id="inlineFormInputCity2" placeholder="City"/>
                    <label htmlFor="inlineFormInputCountry2" className="sr-only">Country</label>
                    <input type="text" value={this.state.countryName} name="countryName" onChange={this.handleCountryInput} className="form-control mb-2 mr-sm-2" id="inlineFormInputCountry2" placeholder="Country"/>
                    <button type="submit" className="btn btn-outline-light mb-2">Search</button>
                </form>
                <DisplayWeather 
                    temperature={this.state.temperature} 
                    cityName={this.state.cityName} 
                    countryName={this.state.countryName} 
                    errMessage={this.state.errMessage}
                    pressure={this.state.pressure}
                    humidity={this.state.humidity}
                    icon={this.state.icon}
                    description={this.state.description}
                    showButton={this.state.isButtonVisible}
                    handleButtonClick={this.handleReset} />
            </section>
        );
    }
};

