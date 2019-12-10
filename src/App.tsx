import * as React from "react";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";

const App = () => {
    return (
        <React.Fragment>
            <Navbar title="React TS Weather App" />
            <Form />
        </React.Fragment>
    );
}

export default App;