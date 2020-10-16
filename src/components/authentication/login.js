
import React, { Component } from "react";
import "./login.css";
import Logo from "./Logo.png";
import { Link}  from 'react-router-dom';
import Overview  from '../dashboards/overview';


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
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        email: "",
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

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  // handleChange = e => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   let formErrors = { ...this.state.formErrors };

  //   switch (name) {
  //     case "email":
  //       formErrors.email = emailRegex.test(value)
  //         ? ""
  //         : "invalid email address";
  //       break;
  //     case "password":
  //       formErrors.password =
  //         value.length < 6 ? "minimum 6 characaters required" : "";
  //       break;
  //     default:
  //       break;
  //   }

  //   this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  // };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="login-page">
        <div className="form">
        <div className="logoimg">
        <img src={Logo} />
            </div>
          <form onSubmit={this.handleSubmit} noValidate className="login-form">
            
            <div className="email">
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Username"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
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
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
            <Link to={'/Overview'}><button type="submit">Login</button></Link>
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
