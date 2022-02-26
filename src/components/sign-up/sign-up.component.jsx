import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [newUser, setNewUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit!");

    const { displayName, email, password, confirmPassword } = newUser;

    if (password !== confirmPassword) {
      alert("Passwords Not the same");
      return;
    }

    try {
      const { account } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(account, { displayName });

      setNewUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setNewUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <div className="sign-up">
      <h2 className="title">
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={newUser.displayName}
            onChange={handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={newUser.confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </h2>
    </div>
  );
};

export default SignUp;
