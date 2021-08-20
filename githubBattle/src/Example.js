import React from 'react';

class Example extends React.Component {
    render() {
        console.log(this);
        return (
            // <h2>Example, {this.props._data} {this.props.boo}</h2>
            <h2>
                Hello, {this.props.name} !
            </h2>
        )
    }
}

export default Example;