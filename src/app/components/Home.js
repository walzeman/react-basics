import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render(){

        let content = "";
        var text = "something";

        return(
            <div>
                <p>In a new Component !</p>
                <p>{ text }</p>
                <p>Your name is { this.props.name}, and your age is { this.props.age }</p>
                <p>User Object => Name: { this.props.user.name}</p>

                <div>
                    <h4>Hobies</h4>
                    <ul>
                        {this.props.user.hobies.map((hobby, i) => <li key={i}>{ hobby }</li>)}
                    </ul>
                </div>

                <hr/>

                {this.props.children}

            </div>
        );
    }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
};