import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

    constructor(props){
        super();
       // this.age = props.age;
        this.state = {
          age: props.initialAge,
          status: 0,
          homeLink: props.initalLinkName
        };


        setTimeout(() => {
            this.setState({
                status:  1
            });
        }, 1000);

        console.log("constructor");

    }

    componentWillMount() {
        console.log("component will mount");
    }

    componentDidMount() {
        console.log("component did mount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("should componet update", nextProps, nextState);
        // if(nextState.status === 1)
        //     return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componet will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componet did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("componet will unmount");
    }

    onMakeMeOlder(){
        this.setState({
            age: this.state.age + 3

        });


    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event) {

        this.setState({
            homeLink: event.target.value
        });

    }


    render(){

        return(
            <div>
                <p>In a new Component !</p>
                <p>Your name is { this.props.name}, and your age is { this.state.age }</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                {/* () => this.onMakeMeOlder()  or this.onMakeMeOlder.bind(this) can be used */}
                <button onClick={this.onMakeMeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={ this.props.greet } className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value={ this.state.homeLink } onChange={this.onHandleChange.bind(this)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>

            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initalLinkName: PropTypes.string
};