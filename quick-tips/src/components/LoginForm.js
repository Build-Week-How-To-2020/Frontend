import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";

// const Box = styled.body`
//   width: 100%;
//   margin: 5%;
//   padding: 10%;
//   justify-content: center;
// `;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 20%;
`;

const Input = styled.input`
  width: 50%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  margin-left: 10px;
  resize: vertical;
`;

const Button = styled.button`
  width: 25%;
  background: #2f2fa2;
  padding: 6px 10px;
  margin-left: 40%;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 19px;
  display: inline-block;
  box-shadow: 10px 10px 8px #888888;
  border: 1px solid;
  background: linear-gradient(to bottom, #2f2fa2 5%, #242582 100%);
`;

// yup help with validation
const formSchema = yup.object().shape({
  username: yup.string().required("Name is a required field."),
  password: yup.string().required(),
});

function LoginForm() {
  //   declare states and initialize to an object
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  //  we can also use state to hold errors
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      console.log("is it valid", valid);
      //   setButtonDisabled(!valid);
    });
  }, [formState]);

  // this test and catches error on the yup formattor.  Similar to axios promises
  const validateChange = (e) => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  // this makes it so that whatever the user types in will be saved as values:
  const inputChanges = (e) => {
    // console.log("show input", e.target.value);
    e.persist();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    }); /* ... the ellipses are called spread operator, they copy over data */

    validateChange(e);
  };

  // This state is needed for the Axios request.  New state to set our post request too. So we can console.log and see it.
  const [post, setPost] = useState([]);
  //   this works the submit button:
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setPost(res.data); // get just the form data from the REST api

        // reset form if successful
        setFormState({
          username: "",
          password: "",
        });
      })
      .catch((err) => console.log(err.response));
  };

  return (
    // <Box>
    <Form onSubmit={formSubmit}>
      <label>
        Username
        <Input
          type="text"
          name="username" /* name is computed key:value in [event.target.name]: event.target.value  */
          id="uname"
          value={formState.username}
          onChange={inputChanges}
        />
        {errors.username.length > 0 ? (
          <p className="error">{errors.username}</p>
        ) : null}
      </label>

      <label>
        Password
        <Input
          type="text"
          name="password"
          id="password"
          value={formState.password}
          onChange={inputChanges}
        />
        {errors.password.length > 0 ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </label>

      <Button>Submit</Button>
    </Form>
    // </Box>
  );
}

export default LoginForm;
