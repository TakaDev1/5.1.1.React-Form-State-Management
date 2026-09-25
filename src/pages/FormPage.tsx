import React from "react";
import Form from "../components/HandleForm";

const FormPage = () => {
  const { inputValue, submittedValue, handleInput, handleSubmit } = Form();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">
          <input
            type="text"
            value={inputValue}
            onChange={handleInput}
            className="border text-white bg-gray-600"
          />
        </label>

        <p className="my-2">入力値: {inputValue}</p>
        <button
          type="submit"
          className="bg-blue-300 text-black font-bold w-1/4 py-2 rounded-full hover:opacity-80 cursor-pointer"
        >
          送信
        </button>
      </form>
      {submittedValue && <div>{submittedValue}</div>}
    </div>
  );
};

export default FormPage;
