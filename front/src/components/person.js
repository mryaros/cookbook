import Menu from './menu';
import React from 'react';

export default class Person extends React.Component {
    render() {
        return(
          <div className={"divStyle"}>
              <Menu/>
              <div className={"divStyles"}>
              <p className={"h2"}>Имя: {this.props.person.name}</p>
              <p className={"h2"}>Фамилия: {this.props.person.surname}</p>
              <p className={"h2"}>Login: {this.props.person.login}</p>
              <p className={"button"}>
                  <a href="#" className="button7">изменить</a>
              </p>
          </div>
          </div>
        );

    }
}