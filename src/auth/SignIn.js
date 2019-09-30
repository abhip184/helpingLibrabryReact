import React, { Component } from 'react';

class SignIn extends Component {
    state = {
        email: "",
        password: ""
      };
      handleChange = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
      };
      handleSubmit = e => {
        e.preventDefault();
        console.log(this.props);
        this.props.history.push("/myacc")
        // this.props.singInUser(this.state);
      };
    render() {
        return (
            <div className="container">
            <br></br>
            <div className="row">
              <div className="card-panel col s12 m6 offset-m3">
                <form onSubmit={this.handleSubmit} className="white">
                  <h5>Sign In</h5>
                  <div className="input-field">
                    <label htmlFor="email">Enrollment No.</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                  </div>
                  <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <button className="pink btn">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default SignIn;