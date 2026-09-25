import React from "react";
import Form from "../components/HandleForm";

const FormPage = () => {
  const { inputValue, submittedValue, handleInput, handleSubmit } = Form();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">
          <input type="text" value={inputValue} onChange={handleInput} />
        </label>

        <p>入力値: {inputValue}</p>
        <button type="submit">送信</button>
      </form>
      {submittedValue && <div>{submittedValue}</div>}
    </div>
  );
};

export default FormPage;
