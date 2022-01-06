import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here!!!");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  return (
    <>
      <div className="mb-3">
        <label className="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="textBox"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-primary mt-3" onClick={handleUpClick}>
          UpperCase
        </button>
      </div>
    </>
  );
}
