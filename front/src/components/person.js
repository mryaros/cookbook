import Menu from './menu';
import React from 'react';

export default class Person extends React.Component {
    render() {
        const PERSON =
            {
                message: "",
                data: {
                    name: "Katia",
                    id: 1,
                    surname: "Leiberova",
                    login: "leiberova",
                    role: "USER"
                },
                status: "SUCCES"
            }
        ;
        return(
          <div className={"divStyle"}>
              <Menu/>
              <div className={"divStyles"}>
              <p className={"h2"}>Имя: {PERSON.data.name}</p>
              <p className={"h2"}>Фамилия: {PERSON.data.surname}</p>
              <p className={"h2"}>Login: {PERSON.data.login}</p>
              <p className={"button"}>
                  <a href="#" className="button7">изменить</a>
              </p>
          </div>
          </div>
        );

    }
}