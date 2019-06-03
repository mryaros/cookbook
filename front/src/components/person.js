import Menu from './menu';
import React from 'react';
import User from'./singletonUser'
import Request from "./newRequest";

export default class Person extends React.Component {
    constructor(props){
        super(props);
        this.state = {person: {name:"", surname: "", login:""} }
        let promise = Request.requestGet("persons/"+User.getInstance().id, 'Get');
        promise.then(result => {
            console.log(result);
            this.setState({person: result.data});
        }, error =>{ console.log(error)});
    }
    render() {
        // const PERSON =
        //     {
        //         message: "",
        //         data: {
        //             name: "Katia",
        //             id: 1,
        //             surname: "Leiberova",
        //             login: "leiberova",
        //             role: "USER"
        //         },
        //         status: "SUCCES"
        //     }
        // ;
        return(
          <div className={"divStyle"}>
              <Menu/>
              <div className={"divStyles"}>
              <p className={"h2"}>Имя: <input type="text" value={this.state.person.name} onChange={(e) => {this.state.person.name = e.target.value; this.setState({person: this.state.person})}}/></p>
              <p className={"h2"}>Фамилия: <input type="text" value={this.state.person.surname} onChange={(e) => {this.state.person.surname = e.target.value; this.setState({person: this.state.person})}}/></p>
              <p className={"h2"}>Login: <input type="text" value={this.state.person.login} onChange={(e) => {this.state.person.login = e.target.value; this.setState({person: this.state.person})}}/></p>
              <p className={"button"}>
                  <a href="#" className="button7" onClick={() => {let promise = Request.requestPost("persons/"+User.getInstance().id, 'POST', this.state.person);
                      promise.then(result => {
                          console.log(result);
                      }, error =>{ console.log(error)});}}>изменить</a>
                  <a href="/authorization" className="button7" onClick={() => {let promise = Request.requestGet("persons/"+User.getInstance().id, 'DELETE');
                      promise.then(result => {
                          console.log(result);
                      }, error =>{ console.log(error)});}}>удалить</a>
              </p>
          </div>
          </div>
        );

    }
}