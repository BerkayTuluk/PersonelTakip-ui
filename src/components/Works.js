import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

function Works({ works, lendWork, deleteWork, backWork }) {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Worker Name</th>
              <th scope="col">Department</th>
              <th scope="col">Work Date</th>
              <th scope="col">Job Name</th>
              <th scope="col" colSpan="3">
                Process
              </th>
            </tr>
          </thead>
          <tbody>
            {works.map((work, index) => {
              return (
                <tr key={index}>
                  <td>{work._id}</td>
                  <td
                    data-toggle="tooltip"
                    data-placement="top"
                    title={work.comments}
                  >
                    {work.workerName}
                  </td>
                  <td>{work.department}</td>
                  <td>{work.quantity}</td>
                  <td>{work.jobName}</td>
                  <td>
                    <butto
                      onClick={() => lendWork(work._id)}
                      className="btn btn-warning"
                    >
                      LEND
                    </butto>
                  </td>
                  <td>
                    <butto
                      onClick={() => deleteWork(work._id)}
                      className="btn btn-danger"
                    >
                      DELETE
                    </butto>
                  </td>

                  <td>
                    <butto
                      onClick={() => backWork(work._id)}
                      className="btn btn-warning"
                    >
                      BACK
                    </butto>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ToastContainer position="bottom-left"/>
      </div>
    </div>
  );
}

export default Works;
