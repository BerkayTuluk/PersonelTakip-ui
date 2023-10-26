import React, { useEffect, useState } from "react";
import "./App.css";
import AddWorks from "./components/AddWorks";
import Works from "./components/Works";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/singup_components";
import Home from "./components/Home";

function App() {
  const [works, setWorks] = useState([]);

  const [work, setWork] = useState({
    workerName: "",
    department: "",
    quantity: "",
    jobName: "",
    comments: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/works")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setWorks(jsonRes));
  });

  const handleChange = (e) => {
    setWork({
      ...work,
      [e.target.name]: e.target.value,
    });
  };

  const addWork = (e) => {
    e.preventDefault();
    const newWork = {
      workerName: work.workerName,
      department: work.department,
      quantity: work.quantity,
      jobName: work.jobName,
      comments: work.comments,
    };
    axios.post("http://localhost:5000/newWorker", newWork);
    toast.success(`The Work ${work.workerName} is added`);
    console.log(`The Work ${work.workerName} is added`);
    setWork({
      workerName: "",
      department: "",
      quantity: "",
      jobName: "",
      comments: "",
    });
  };

  const deleteWork = (id) => {
    toast.error(`The Work with id ${id} is deleted`, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    axios.delete("http://localhost:5000/delete/" + id);
  };

  const lendWork = (id) => {
    axios.put("http://localhost:5000/lend/" + id);
    toast.warn(`The Work with id ${id} is lended`, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const backWork = (id) => {
    axios.put("http://localhost:5000/back/" + id);
    toast.warn(`The Work with id ${id} is back`, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route axact path="/login-user" element={<Login />} />
          <Route axact path="/register" element={<Register />} />
          <Route axact path="/" element={<Home />} />
          <Route
            axact
            path="/works"
            element={
              <Works
                works={works}
                lendWork={lendWork}
                deleteWork={deleteWork}
                backWork={backWork}
              />
            }
          />
          <Route
            path="/addwork"
            element={
              <AddWorks
                work={work}
                handleChange={handleChange}
                addWork={addWork}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
