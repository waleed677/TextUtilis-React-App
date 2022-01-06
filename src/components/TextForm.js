import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

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

      <div className="container">
        <h2>
          {text.split(" ").length - 1} words and {text.length} characters
        </h2>
      </div>
    </>
  );
}
