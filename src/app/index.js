import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            homeLink: "Home",
            homeMounted: true
        };

    }

    onGreet() {
        alert("Hello");
    }

    onChangeLinkName(newnName) {
        this.setState({
            homeLink: newnName
        });
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: ! this.state.homeMounted
        });
    }

    render(){

        let homeComponent ="";
        if(this.state.homeMounted){
            homeComponent = (
                <Home
                    name="Max"
                    initialAge={27}
                    greet={this.onGreet}
                    changeLink = { this.onChangeLinkName.bind(this)}
                    initalLinkName = {this.state.homeLink}
                >
                    <p>This is a paragraph</p>
                </Home>
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                          <Header homeLink={ this.state.homeLink }/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeComponent}
                    </div>
                </div>


                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(un)Mount Home Component</button>
                    </div>
                </div>
            </div>

        );
    }
}

render(<App/>, window.document.getElementById("app"));

