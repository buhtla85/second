import * as React from "react";
import { myKey, apiResponse } from "../sensitive";
import { DisplayWeather } from "./DisplayWeatherConditions";
 
interface IStateForm {
    cityName: string,
    errMessage: string,
    temperature: number | null,
    description: string,
    icon: string,
    pressure: number | null,
    humidity: number | null,
    isButtonVisible: boolean
}


function weatherObject() {
    return {cityName: "", errMessage: "", temperature: null, description: "", icon: "", pressure: null, humidity: null, isButtonVisible: false}
}

export class Form extends React.Component<{}, IStateForm> {
    constructor(props:any) {
        super(props);
        this.state = weatherObject();
        // localStorage.setItem("city", this.state.cityName);
        // this.setState({ cityName: localStorage.getItem("city") });     
    }

    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=Belgrade&APPID=${myKey}`)
            .then(res => res.json())
            .then((data: apiResponse) => this.setState({
                cityName: data.name, 
                errMessage: "", 
                temperature: Math.round(data.main.temp - 273.15),
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                isButtonVisible: true
            }))
    }

    handleCityInput = (event: React.ChangeEvent<HTMLInputElement>) =>  this.setState({cityName: event.target.value});
        //this.setState({[event.target.name]: event.target.value} as { [K in keyof IStateForm]: IStateForm[K] });
        
    fetchWeatherConditions = async () => {
        const {cityName} = this.state;
        const hitApi = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${myKey}`);
        const response: apiResponse = await hitApi.json();

        if(cityName) {
            this.setState({
                cityName: response.name,
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

    handleReset = () => this.setState(weatherObject());
    
    render () {
        return (
            <section id="main" className="pt-5">
                <form action="" className="form-inline d-flex justify-content-center" onSubmit={e => e.preventDefault() as any || this.fetchWeatherConditions()}>
                    <label htmlFor="inlineFormInputCity2" className="sr-only">City</label>
                    <input type="text" value={this.state.cityName} name="cityName" onChange={this.handleCityInput} className="form-control mb-2 mr-sm-2" id="inlineFormInputCity2" placeholder="City"/>
                    <button type="submit" className="btn btn-outline-light mb-2">Search</button>
                </form>
                <DisplayWeather 
                    temperature={this.state.temperature} 
                    cityName={this.state.cityName} 
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

