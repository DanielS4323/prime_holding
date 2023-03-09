import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import StyledForm from "./StyledForm";

const Form = () => {
  const [jsonData, setJsonData] = useState();
  const [form, setForm] = useState({});

  useEffect(() => {
    const getEmployee = localStorage.getItem("employees");
    if (typeof getEmployee === "string") {
      const employeeArr = JSON.parse(getEmployee);
      setJsonData(employeeArr);
    }
  }, []);

  console.log(jsonData);

  function handleFormSubmit(e) {
    e.preventDefault();

    setJsonData((prev) => [...prev, form]);
    const newArr = JSON.stringify(jsonData);

    localStorage.setItem("employees", newArr);
    e.target.reset();
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm((values) => ({ ...values, [name]: value }));
  }

  //   console.log(localStorage.getItem("employees"));

  //   console.log(form);

  return (
    <StyledForm className="container" onSubmit={handleFormSubmit}>
      <Input onChange={handleChange} label="Full Name" for="fullName" />
      <Input onChange={handleChange} type="email" label="Email" for="email" />
      <Input
        onChange={handleChange}
        type="tel"
        label="Phone Number"
        for="phoneNumber"
      />
      <Input
        onChange={handleChange}
        type="date"
        label="Date of Birth"
        for="birthday"
      />
      <Input
        onChange={handleChange}
        type="number"
        label="Monthly Salary"
        for="salary"
      />
      <button>Submit</button>
    </StyledForm>
  );
};

export default Form;
