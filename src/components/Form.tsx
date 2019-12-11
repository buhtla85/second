import * as React from "react";
import { myKey } from "../sensitive";
 
interface IStateForm {
    cityName: string,
    countryName: string,
    errMessage: string,
    temperature: number,
    description: string,
    icon: string,
    pressure: number,
    humidity: number
}

function weatherObject() {
    return {cityName: "", countryName: "", errMessage: "", temperature: 0, description: "", icon: "", pressure: 0, humidity: 0}
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

    fetchWeatherConditions = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {cityName, countryName} = this.state;
        const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&APPID=${myKey}`;

        // if(cityName.length && countryName.length <= 0) {
        //     this.setState({errMessage: "Please be sure to add city and country."});
        //     setTimeout(() => {
        //         this.setState({errMessage: ""})
        //     }, 5000);
        // } else {
        //     fetch(endpoint)
        //         .then((response) => response.json())
        //         .then((data) => {
        //         //console.log(data);
        //     });
        // } 
    }

    render () {
        return (
            <section className="container pt-3">
                <form action="" className="form-inline d-flex justify-content-center" onSubmit={this.fetchWeatherConditions}>
                    <label htmlFor="inlineFormInputCity2" className="sr-only">City</label>
                    <input type="text" value={this.state.cityName} name="cityName" onChange={this.handleCityInput} className="form-control mb-2 mr-sm-2" id="inlineFormInputCity2" placeholder="City"/>
                    <label htmlFor="inlineFormInputCountry2" className="sr-only">Country</label>
                    <input type="text" value={this.state.countryName} name="countryName" onChange={this.handleCountryInput} className="form-control mb-2 mr-sm-2" id="inlineFormInputCountry2" placeholder="Country"/>
                    <button type="submit" className="btn btn-outline-secondary mb-2">Search</button>
                </form>
            </section>
        );
    }
};

