import Menu from './menu';
import React from 'react';
import Request from "./newRequest";

export default class Person extends React.Component {
    constructor(props){
        super(props);
        this.state = {person: {name:"", surname: "", login:""} }
        let promise = Request.requestGet("persons/"+localStorage.getItem("userId"));
        promise.then(result => {
            if(result.status == "FAIL")
                window.location.href = '/error?mes='+result.message;
            this.setState({person: result.data});
        }, error =>{ console.log(error)});
    }
    render() {
        return(
          <div className={"divStyle"}>
              <Menu/>
              <div className={"divStyles"}>
              <p className={"h2"}>Имя: <input type="text" value={this.state.person.name} onChange={(e) => {this.state.person.name = e.target.value; this.setState({person: this.state.person})}}/></p>
              <p className={"h2"}>Фамилия: <input type="text" value={this.state.person.surname} onChange={(e) => {this.state.person.surname = e.target.value; this.setState({person: this.state.person})}}/></p>
              <p className={"h2"}>Login: <input type="text" value={this.state.person.login} onChange={(e) => {this.state.person.login = e.target.value; this.setState({person: this.state.person})}}/></p>
              <p className={"button"}>
                  <a href="#" className="button7" onClick={() => {
                      let promise = Request.requestPost("persons/"+localStorage.getItem("userId"), this.state.person);
                      promise.then(result => {
                          if(result.status == "FAIL")
                              window.location.href = '/error?mes='+result.message;
                          localStorage.setItem('session', result.data.header);
                      }, error =>{ console.log(error)});}}>изменить</a>
                  <a href="/authorization" className="button7" onClick={() => {
                      let promise = Request.requestDelete("persons/"+localStorage.getItem("userId"));
                      promise.then(result => {
                          console.log(result);
                          localStorage.clear();
                      }, error =>{ console.log(error)});}}>удалить</a>
                  <a href="/authorization" className="button7" onClick={() => {
                      localStorage.clear();
                      }}>выход</a>
              </p>
          </div>
          </div>
        );

    }
}