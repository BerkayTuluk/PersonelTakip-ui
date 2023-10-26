import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";

function AddWorks({ work, handleChange, addWork }) {
  return (
    <div>
      <Navbar />
      <div>
        <div className="container w-50 mt-5 border border-secondary">
          <form style={{ padding: "20px 20px 10px 20px" }}>
            <div class="form-floating mb-3">
              <input
                type="text"
                value={work.workerName}
                onChange={handleChange}
                name="workerName"
                className="form-control"
                id="floatingInput"
                placeholder="workerName"
              />
              <label for="floatingInput">Worker Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="number"
                value={work.quantity}
                onChange={handleChange}
                name="quantity"
                className="form-control"
                id="floatingInput"
                placeholder="quantity"
              />
              <label for="floatingInput">Work Date</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                value={work.jobName}
                onChange={handleChange}
                name="jobName"
                className="form-control"
                id="floatingInput"
                placeholder="jobName"
              />
              <label for="floatingInput">JobName</label>
            </div>
            <div className="form-floating">
              <select
                className="form-select mb-3"
                value={work.department}
                onChange={handleChange}
                id="floatingSelect"
                name="department"
                aria-label="Floating label select example"
              >
                <option selected>Departmens</option>
                <option value="Back-End">Back-End</option>
                <option value="Front-End">Front-End</option>
                <option value="Büyük-Veri">Büyük Veri</option>
                <option value="Yapay-Zeka">Yapay Zeka</option>
                <option value="Mobil-Uygulama">Mobil Uygulama</option>
                <option value="Gömülü-Sistemler">Gömülü Sistemler</option>
                <option value="Siber-Güvenlik">Siber Güvenlik</option>
                <option value="Sql">Sql</option>
                <option value="Donanım">Donanım</option>
              </select>
              <label for="floatingSelect">Works with selects</label>
            </div>
            <div className="form-floating mb-3 ">
              <textarea
                className="form-control"
                value={work.comments}
                onChange={handleChange}
                placeholder="Leave a comment here"
                name="comments"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>
            <button
              type="button"
              onClick={addWork}
              className="btn btn-primary btn-lg"
            >
              Add Work
            </button>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddWorks;
