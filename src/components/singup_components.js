import React, { Component } from 'react'
import { toast } from 'react-toastify';
import Navbar2 from './Navbar2';

export default class singup_components extends Component {
  constructor(props){
    super(props)
    this.state={
        fname:"",
        email:"",
        password:"",
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const {fname,email,password} = this.state;
    toast(`The User ${fname} is register`)
    console.log(fname,email,password);
    fetch("http://localhost:5000/register",{
        method:"POST",
        crossDomain:true,
        headers:{
           "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*"
        },
        body:JSON.stringify({
            fname,
            email,
            password
        }),
    }).then((res)=>res.json())
    .then((data)=>{console.log(data,"userRegister");})
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
                      <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>
  
                      <div className="form-outline form-white mb-4">
                        <label className="form-label" for="typeEmailX">
                          Name
                        </label>
                        <input
                          type="text"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="name"
                          onChange={e=>this.setState({fname:e.target.value})}
                        />
                      </div>
  
                      <div className="form-outline form-white mb-4">
                        <label className="form-label" for="typePasswordX">
                          Password
                        </label>
                        <input
                          type="password"
                          onChange={e=>this.setState({password:e.target.value})}
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          placeholder="password"
                        />
                      </div>
                      <div className="form-outline form-white mb-5">
                        <label className="form-label" for="typePasswordX">
                          E-mail
                        </label>
                        <input
                          type="email"
                          onChange={e=>this.setState({email:e.target.value})}
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          placeholder="E-mail"
                        />
                      </div>
                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                    <div>
                      <p className="mb-0">
                        Don't have an account?{" "}
                        <a href="/login-user" className="text-white-50 fw-bold">
                          Sign in
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
    )
  }
}
