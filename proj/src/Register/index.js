import React from "react";
import { Formik, Form } from "formik";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const Register = () => {
  const registerRequest = (values) => {
    console.log(values);
  };
  return (
    <Grid>
      <header className="App-header">
        <Typography variant="h1">Sandbox Testing</Typography>
        <Typography variant="h2">Register</Typography>
        <Typography variant="p" className="App-text">
          Fill out the form below
        </Typography>
        <Formik
          initialValues={{
            name: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={({ props }) => {
            registerRequest({
              name: props.values.name,
              lastName: props.values.lastName,
              email: props.values.email,
              password: props.values.password,
            });
          }}
          render={(props) => (
            <Form onSubmit={props.handleSubmit}>
              <Grid className="App-form">
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="name"
                  placeholder="Name"
                />
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.lastName}
                  name="lastName"
                  placeholder="Last Name"
                />
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  name="email"
                  placeholder="E-mail"
                />
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  name="password"
                  placeholder="Password"
                />
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.confirmPassword}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <Button
                  type="submit"
                  size="large"
                  fullWidth
                  disabled={
                    props.values.password !== props.values.confirmPassword
                  }
                >
                  Submit
                </Button>
              </Grid>
            </Form>
          )}
        />
        <Grid style={{ fontSize: "15px" }}>
          <Link href="/register">Register</Link>
        </Grid>
      </header>
      <Grid className="App-link">
        <Grid>
          <Link href="https://filipeverrone.github.io" target="blank">
            About
          </Link>
        </Grid>
        <Grid>
          <Link href="https://www.github.com/filipeverrone" target="blank">
            Report
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
