import React, { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [submittedValue, setSubmittedValue] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value.trim()) return;
    setInputValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmittedValue(inputValue);
    setInputValue("");
  };
  return {
    inputValue,
    submittedValue,
    handleInput,
    handleSubmit,
  };
};

export default Form;
