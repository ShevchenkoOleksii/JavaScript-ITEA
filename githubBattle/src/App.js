import React, { Component, Fragment} from 'react';
import Example from './Example';

//props, state
 class App extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            name: 'Lora'
        }
        this.updateName = this.updateName.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props, state, 'getDerivedStateFromProps');
        return {
            name: 'George'
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    updateName() {
        // console.log('hello');
        // this.setState({name: 'Bob'}, () => {
        //     console.log(this.state.name); //Bob
        // });
        // console.log(this.state.name); //Lora
        this.setState({name: this.state.name === 'Bob' ? 'Lora' : 'Bob'});
    }   

    render() {
        console.log('render');
        const data = 123;
        const {name} = this.state;
        return (
            <Fragment>
                {/* <h1>Hello World</h1> */}
                {/* <Example _data={data} boo='hello' num={256}/> */}
                <Example name={name} />
                {/* <span>{data}</span> */}
                {/* <h3>{this.state.name}</h3> */}
                <h3>{name}</h3>
                <button onClick={this.updateName}>Update State</button>
            </Fragment>  
        )
    }
}

export default App;
// export const App = () => {
//     return (
//         <h1>Hello World</h1>
//     )
// }
// export const App = () => (
//     <h1>Hello World</h1>
// )
