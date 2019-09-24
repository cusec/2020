import React from "react";


export default class Feature extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div className="feature-block">
                    <div className="feature-icon" style={{backgroundImage: `url(${this.props.img})`,backgroundSize:"contain", backgroundPosition:"center center", backgroundRepeat:"no-repeat"}}>
                    </div>
                    <div className="feature-title">{this.props.title}</div>
                    <div className="feature-desc">{this.props.desc}</div>
                </div>

            </React.Fragment>
        );
    }
}