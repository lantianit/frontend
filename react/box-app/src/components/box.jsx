import React, { Component } from 'react';


class Box extends Component {
    state = {
        x: 0,
    };

    handleClickLeft = (step) => {
        this.setState({
            x: this.state.x - step,
        });
    }

    handleClickRight = (step) => {
        this.setState({
            x: this.state.x + step
        });
    }

    render() { 
        return (
            <React.Fragment>
                <div style={this.getStyles()}>{this.toString()}</div>
                <button onClick={() => this.handleClickLeft(10)} className="btn btn-primary m-2">left</button>
                <button onClick={() => this.handleClickRight(10)} className='btn btn-success m-2'>right</button>
            </React.Fragment>
        );
    }

    getStyles() {
        let styles = {
            width: 50,
            height: 50,
            backgroundColor: "lightblue",
            color: "white",
            textAlign: "center",
            lineHeight: "50px",
            borderRadius: "5px",
            marginLeft: this.state.x,
        };

        if (this.state.x === 0) {
            styles.backgroundColor = 'orange';
        }

        return styles;
    }

    toString() {
        const {x} = this.state;
        return `x: ${x}`;
    }
}
 
export default Box;