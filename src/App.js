import './app.css'
import React from "react";

function Hello() {
    return <div>hello</div>
}

class HelloComponent extends React.Component {
    render() {
        return <div>this is component</div>;
    }
}

function App() {
    return (
        <div>
            <Hello></Hello>
            <HelloComponent></HelloComponent>
        </div>
    );
}

export default App;
