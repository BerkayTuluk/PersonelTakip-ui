import React, { Component } from "react";
import Navbar2 from "./Navbar2";

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
     const { email, password } = this.state; 
     console.log(email, password);
     fetch("http://localhost:5000/login-user", {
       method: "POST",
       crossDomain: true,
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
         "Access-Control-Allow-Origin": "*",
       },
       body: JSON.stringify({
         email,
         password,
       }),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data, "userRegister");
       });
  }
  render() {
    return (
      <div>
      <Navbar2/>
      <form onSubmit={this.handleSubmit}>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  styleHtml="border-radius: 1rem;"
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label" for="typeEmailX">
                          Email
                        </label>
                        <input
                          type="email"
                          id="typeEmailX"
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                          className="form-control form-control-lg"
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label" for="typePasswordX">
                          Password
                        </label>
                        <input
                          type="password"
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                          id="typePasswordX"
                          className="form-control form-control-lg"
                        />
                      </div>

                      <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>

                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"    
                      >
                        <a href="/works">Login</a>
                      </button>

                      {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f fa-lg"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-google fa-lg"></i>
                        </a>
                      </div> */}
                    </div>

                    <div>
                      <p className="mb-0">
                        Don't have an account?{" "}
                        <a href="/register" className="text-white-50 fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
      </div>
    );
  }
}