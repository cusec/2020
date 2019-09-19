import React from "react";

export default class Feature extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
           <React.Fragment>
               <div>
                <div>
                </div>
                <p>{this.props.desc}</p>
               </div>
               
           </React.Fragment>
        );
    }
}