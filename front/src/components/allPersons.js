import React from 'react';
import ReactDOM from 'react-dom';
import Request from './newRequest'

export default class AllPersons extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            prom: ""
        }
        let promise = Request.requestGet("persons", 'Get');
        promise.then(result => {
            if(result.status == "FAIL")
                window.location.href = '/error?mes='+result.message;
            console.log(result);
            this.setState({prom : result.data[0].login});
        }, error =>{ console.log(error)});
    }
    render() {
        // let allPerson = "sw";
        // let promise = Request.requestGet("persons", 'Get');
        // promise.then(result => {
        //     console.log(result);
        //     this.setState({prom : result.data});
        // }, error =>{ allPerson = error; console.log(error)});
        return(
            <div>
                {this.state.prom}
            </div>
        )
    }
}