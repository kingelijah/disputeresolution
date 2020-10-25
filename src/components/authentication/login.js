
import React, { Component } from "react";
import "./login.css";
import Logo from "./Logo.png";
import { Link,Redirect}  from 'react-router-dom';
import Overview  from '../dashboards/overview';
import Axios from "axios";


const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

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



class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      formErrors: {
        username: "",
        authorize: "",
        password: ""
      }
    };
  }
  componentDidMount(){
    document.body.style.backgroundColor = "#E0AD0F";// Set the style
  };
  componentWillUnmount(){
    document.body.style.backgroundColor = "#EDF2F8";// Set the style
  }
  handleSubmit = e => {
    e.preventDefault();
    let formError = { ...this.state.formErrors };
    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Username: ${this.state.username}
        Password: ${this.state.password}
      `);

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
     const userName = this.state.username;
     const Password = this.state.password;
    
    const token = Buffer.from(`${userName}:${Password}`, 'utf8').toString('base64')
    var data = {
      ipaddress:"192.168.32.1"
    };
    console.log(token);
    
    Axios.post('https://fbn.vasudamall.com/Account/Login', data, {
      headers: {
        'Authorization': `Basic ${token}`
      },
    })
    .then( res=>{ 
          console.log( res.data)
          this.setState({
            user: res.data.token
          });
          // localStorage.setItem('token',res.data.token)
          var un = JSON.stringify(res.data);      
          localStorage.setItem('un',un);
          console.log('test', res.data.Token)
          if (res.data.Role === "Recon"){
            this.props.history.push('/Reconpage');

          }
          else if(res.data.Role === "Agent"){
            this.props.history.push('/Agent');

          }
          else{
            this.props.history.push('/Overview');

          }
        
    
        })
        .catch((error) => {
          this.state.formErrors.authorize  = "User Not Profiled Kindly Contact Admin";
          this.setState({formError});
          console.error(error)})
      };
  

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "username":
        formErrors.username = value.length < 3 ? "minimum 3 characters required" : "";
  
        break;
      case "password":
        formErrors.password = value.length < 3 ? "minimum 3 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="login-page">
        <div className="form">
        <div className="logoimg">
        <img src={Logo} />
            </div>
          <form onSubmit={this.handleSubmit} noValidate className="login-form">
            
            <div className="username">
              <input
                className={formErrors.username.length > 0 ? "error" : null}
                placeholder="Username"
                type="text"
                name="username"
                noValidate
                onChange={this.handleChange}
              />
              </div>
              <div>
              {formErrors.username.length > 0 && (
                <span className="errorMessage">{formErrors.username}</span>
              )}
            </div>
            <div className="password">
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              </div>
              <div>
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
            <button type="submit">Login</button>
            <div>
              {formErrors.authorize.length > 0 && (
                <span className="errorMessage">{formErrors.authorize}</span>
              )}
            </div>
              <p className="message">Forgot Password?</p>
            
            </div>
          </form>
        </div>
        <div className="dot"></div>
        <div className="dot1"></div>
        <div className="dot2"></div>

      </div>
    );
  }
}

export default login;
