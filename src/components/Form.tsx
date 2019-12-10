import * as React from "react";
import { myKey } from "../sensitive";
 
interface IStateForm {
    cityName: string,
    countryName: string,
    errMessage: string
}

export class Form extends React.Component<{}, IStateForm> {
    constructor(props:any) {
        super(props);
        this.state = {
            cityName: "", countryName: "", errMessage: ""
        }
    }

    handleInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({[event.target.name]: event.target.value} as {[ K in keyof IStateForm]: IStateForm[K]});
    }

    render () {
        return (
            <section className="container pt-3">
                <form action="" className="form-inline d-flex justify-content-center">
                    <label htmlFor="inlineFormInputCity2" className="sr-only">City</label>
                    <input type="text" value={this.state.cityName} name="cityName" onChange={this.handleInputs} className="form-control mb-2 mr-sm-2" id="inlineFormInputCity2" placeholder="City"/>
                    <label htmlFor="inlineFormInputCountry2" className="sr-only">Country</label>
                    <input type="text" value={this.state.countryName} name="countryName" onChange={this.handleInputs} className="form-control mb-2 mr-sm-2" id="inlineFormInputCountry2" placeholder="Country"/>
                    <button type="button" className="btn btn-outline-secondary mb-2">Search</button>
                </form>
            </section>
        );
    }
};

