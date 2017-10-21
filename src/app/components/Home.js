import React from "react";

export class Home extends React.Component {
    render(){

        let content = "";

        if(true)
            content = <p>Sum = </p>
        return(
            <div>
                <p>In a new Component !</p>

                {content}
                { 3 + 6 }
                { 5 == 2 ? "Yes": "No"}
            </div>
        );
    }
}