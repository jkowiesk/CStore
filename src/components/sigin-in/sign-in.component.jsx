import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";

import "./sign-in.styless.scss";

export default function SignIn(params) {
  const [account, setAccount] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(account);
    setAccount({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setAccount((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          handleChange={handleChange}
          value={account.email}
          reguired
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          handleChange={handleChange}
          value={account.password}
          reguired
        />
      </form>
    </div>
  );
}
