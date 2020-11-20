/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Formik } from "formik";
import "./App.css";

const App = () => {
  const loginRequest = (fields) => {
    console.log("User logged");
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Sandbox Testing</h1>
          <p className="App-text">
            Welcome to the big testing web site!
            <br /> Give your application here, and at work!
          </p>
          <Formik
            initialValues={{ name: "", password: "" }}
            onSubmit={({ fields }) => {
              loginRequest(fields);
            }}
            render={(props) => (
              <form onSubmit={props.handleSubmit}>
                <div className="App-form">
                  <input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    id="name"
                    placeholder="User or e-mail"
                  />
                  <input
                    type="password"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                    id="password"
                    placeholder="Password"
                  />
                  <button
                    id="button"
                    type="submit"
                    disabled={
                      props.values.name === "" || props.values.password === ""
                    }
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          />
          <div style={{ fontSize: "15px" }}>
            <a href="/register">Register</a>
          </div>
        </header>
        <div className="App-link">
          <div>
            <a href="https://filipeverrone.github.io" target="blank">
              About
            </a>
          </div>
          <div>
            <a href="https://www.github.com/filipeverrone" target="blank">
              Report
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
