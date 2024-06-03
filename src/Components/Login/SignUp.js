import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.signUpButtonClick = this.signUpButtonClick.bind(this);
  }

  async signUpButtonClick(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let lastname = document.getElementById('lastname').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;

    let data = {
      username: username,
      nama_lengkap: lastname,
      password: password,
      email: email
    };

    try {
      const response = await axios.post('http://localhost/tribone-api-master/register.php', data);
      if (response.data.status === 200) {
        this.props.history.push('/Login');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("Signup failed:", error.response ? error.response.data : error.message);
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.signUpButtonClick}>
          <h3 className="text-center">Sign Up</h3>

          <div className="form-group">
            <label>First name</label>
            <input type="text" id="username" className="form-control" placeholder="First name" />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input type="text" id="lastname" className="form-control" placeholder="Last name" />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" id="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" id="password" className="form-control" autoComplete="on" placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          <p className="forgot-password text-right">
            Already registered <Link to="/Login">sign in?</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default SignUp;
