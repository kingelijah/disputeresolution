
import React, { Component } from "react";
import { Link,Redirect}  from 'react-router-dom';
import Overview  from './overview';
import Axios from "axios";
import Navbars from './navbar';




const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};



class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffid: null,
      role: null,
      team: null,
      formErrors: {
        staffid: "",
        role: "",
        team: ""
      }
    };
    
  }
  
  componentDidMount(){
  };
  componentWillUnmount(){
  }
  
  handleSubmit = e => {
    var datas = JSON.parse(localStorage.getItem("un"));
    e.preventDefault();
    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Username: ${this.state.username}
        Password: ${this.state.password}
      `);

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
     
    var data = {
      staffId: this.state.staffid,
      role: this.state.role,
      team: this.state.team
    };
    console.log(data)
    Axios.post('https://fbn.vasudamall.com/Account/AddUser', data, {
      headers: {
        'Authorization': `Bearer ${datas.Token}`
      },
    })
    .then( res=>{ 
          console.log( res.data)
         alert('User Registered Successfully')
        
    
        })
        .catch((error) => {
        
          console.error(error)})
      };
  

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "staffid":
        formErrors.staffid = value.length < 3 ? "minimum 3 characters required" : "";
  
        break;
      case "role":
        formErrors.role = value.length < 3 ? "minimum 3 characters required" : "";
        break;
        case "team":
          formErrors.team = value.length < 3 ? "minimum 3 characters required" : "";
          break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div>
        <Navbars/>
      <div className="login-page">
        <div className="form">
          <form onSubmit={this.handleSubmit} noValidate className="login-form">
            
            <div className="staffid">
              <input
                className={formErrors.staffid.length > 0 ? "error" : null}
                placeholder="Staff Id"
                type="text"
                name="staffid"
                noValidate
                onChange={this.handleChange}
              />
              </div>
              <div>
              {formErrors.staffid.length > 0 && (
                <span className="errorMessage">{formErrors.staffid}</span>
              )}
            </div>
            <div className="role">
              <input
                className={formErrors.role.length > 0 ? "error" : null}
                placeholder="Role"
                type="text"
                name="role"
                noValidate
                onChange={this.handleChange}
              />
              </div>
              <div>
              {formErrors.role.length > 0 && (
                <span className="errorMessage">{formErrors.role}</span>
              )}
            </div>
            <div className="team">
              <input
                className={formErrors.team.length > 0 ? "error" : null}
                placeholder="Team"
                type="text"
                name="team"
                noValidate
                onChange={this.handleChange}
              />
              </div>
              <div>
              {formErrors.team.length > 0 && (
                <span className="errorMessage">{formErrors.team}</span>
              )}
            </div>
            <div className="createAccount">
            <button type="submit">Register</button>
            
            </div>
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default RegisterUser;
